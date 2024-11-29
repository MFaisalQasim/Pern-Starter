import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Response, NextFunction } from 'express';
import { UserRequest } from '../interface';
import { prisma } from '../config/prisma.client'; // Import the Prisma client here
import { createJwtToken, getHashedPassword, parseBigJSON } from '../utils/index';
import mailer, { Text } from '../utils/mailer';
import { resetPasswordEmailTemplate } from '../emailTemplate/resetPassword';
import { log } from 'console';
import stripe from '../utils/stripe';

const login = async (req: UserRequest, res: Response, next: NextFunction): Promise<any> => {
  try {
    log('body', req.body);

    const { email, password } = req.body;

    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) return next({ status: 404, error: 'User Not Exist' });

    const match = await bcrypt.compare(password, user?.password);

    if (!match) {
      res.send({ status: 404, error: 'Invalid email or password' });
    }

    const token = createJwtToken(user?.id);

    //@ts-ignore
    delete user.password;

    return res.status(200).json(parseBigJSON({ success: true, user, token })); // Use one res.send here
  } catch (error) {
    return next({ error });
  }
};

const signup = async (req: UserRequest, res: Response, next: NextFunction) => {
  try {
    log('body here', req.body);

    const { email, password } = req.body;
    const hashedPassword = await getHashedPassword(password);

    const user = await prisma.user.findFirst({ where: { email } });
    if (user) return next({ status: 405, message: 'User Already Exist' });

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return res.status(200).json(parseBigJSON({ success: true, newUser })); // Use one res.send here
  } catch (error) {
    return next({ error });
  }
};

// const createCustomer = async () => {
//   const params: Stripe.CustomerCreateParams = {
//     description: 'test customer',
//   };

//   const customer: Stripe.Customer = await stripe.customers.create(params);

//   console.log(customer.id);
// };
// createCustomer();

const stripe = async (req: UserRequest, res: Response, next: NextFunction) => {
//   try {
//     // const stripe = require('stripe')('sk_test_51PHNIQD5ixn6khTY7MwbQSBZjErrAvt37e3VY5mwunnmKW0D3J76951Ggg2voRrstAzoNqMuSMLe6aI9IZeAcT3400tHdYlzMZ');
//     // const stripe = new Stripe('sk_test_...');
//     const stripe = new Stripe(
//       'sk_test_51QQ54aLh1AB9j6IOwruDZwX1u7A1R1jwNJkYxUBkdcSZ3oSF0DHD6hrkrbvg9vqmcfWgAmNwe4BydNaToV9jRiwY00n02Cpq49',
//     );
//     const test = await stripe.products.create({
//       name: 'Starter Subscription',
//       description: '$12/Month subscription',
//     })
//     // .then(product => {
//     // stripe.prices.create({
//     //   unit_amount: 1200,
//     //   currency: 'usd',
//     //   recurring: {
//     //     interval: 'month',
//     //   },
//     //   product: product.id,
//     // })
//     // .then(price => {
//     //     console.log('Success! Here is your starter subscription product id: ' + product.id);
//     //     console.log('Success! Here is your starter subscription price id: ' + price.id);
//     //   });
//     // });

//     // const cus = await stripe.customers.create({
//     //   email: 'customer@example.com',
//     // });

//     const { email } = req.body;
//     // Create a new customer and then create an invoice item then invoice it:
//     // const test = await
//     //  stripe.customers
//     //   .create({
//     //     email: email,
//     //   })
//       // .then(() => {
//         // have access to the customer object
//         // return stripe.invoiceItems
//         //   .create({
//         //     customer: customer.id, // set the customer id
//         //     amount: 2500, // 25
//         //     currency: 'usd',
//         //     description: 'One-time setup fee',
//         //   })
//           // .then((invoiceItem) => {
//           //   return stripe.invoices.create({
//           //     collection_method: 'send_invoice',
//           //     customer: invoiceItem.customer,
//           //   });
//           // })
//           // .then((invoice) => {
//           //   // New invoice created on a new customer
//           // })
//           // .catch((err) => {
//           //   // Deal with an error
//           // });
//       // });

//     console.log(test);

//     return next({
//       message: test,
//     });

//     // return res.status(200).json(parseBigJSON({ success: true, product })); // Use one res.send here
//   } catch (error) {
//     return next({ error });
//   }
};

const createPaymentIntent = async (req: UserRequest, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { amount, currency } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Amount in smallest currency unit (e.g., cents for USD)
      currency,
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};


const resetPassword = async (req: UserRequest, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { password } = req.body;

    const token = req.query.token ? req.query.token.toString().replace(/d_O_t/g, '.') : null;

    if (!token) {
      return res.status(400).json({ error: 'Token is required in the query parameters.' });
    }

    const decode = jwt.verify(token, `${process.env.SECRET}`);
    const user = await prisma.user.findFirst({
      where: { id: decode.id },
    });

    if (!user) {
      return next({ status: 404, error: 'No User Found' });
    }

    const hashedPassword = await getHashedPassword(password);
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });
    return res.status(200).json(parseBigJSON({ success: true, message: 'Password Reset Successful' })); // Use one res.send here
  } catch (error: any) {
    if (error.message == 'jwt malformed') {
      return next({ status: 400, error: 'Invalid Token' });
    }
    return next({ error: error.message });
  }
};

const resetPasswordThroughEmail = async (req: UserRequest, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { email } = req.body;
    log('email', email);
    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) return res.status(404).json({ success: false, message: 'User Not Found' });

    const token = createJwtToken(user?.id);
    // const token = jwt.sign({ id: user.id }, process.env.SECRET, { expireIn: '1d' });
    log('user', user);
    const resetUrl = `${process.env.FRONTEND_URL}reset-password/${token.replace(/\./g, 'd_O_t')}`;

    await mailer.sendEmail(
      user.email,
      'NodeExpressTypeScriptStarterKit: Reset Password',
      resetPasswordEmailTemplate(user.firstName, resetUrl),
      // Text.reset.message({
      //   firstName: user.firstName,
      //   lastName: user.lastName,
      //   email: user.email,
      //   shortLink: resetUrl,
      // }),
    );
    return res.status(200).json({ success: true, message: 'Password reset link sent to your email.' });
  } catch (error: any) {
    if (error.message == 'jwt malformed') {
      return next({ error: error.message });
    }
  }
};

export { signup, login, resetPassword, resetPasswordThroughEmail, stripe, createPaymentIntent };
