import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Response, NextFunction } from 'express';
import { UserRequest } from '../interface';
import { prisma } from '../config/prisma.client'; // Import the Prisma client here
import { createJwtToken, getHashedPassword, parseBigJSON } from '../utils/index';
import mailer, { Text } from '../utils/mailer';
import { resetPasswordEmailTemplate } from '../emailTemplate/resetPassword';
import { log } from 'console';

const login = async (req: UserRequest, res: Response, next: NextFunction): Promise<any> => {
  try {
    console.log('body', req.body);

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

const signup = async (req: UserRequest, res: Response, next: NextFunction): Promise<any> => {
  try {
    console.log('body here', req.body);

    const { email, password, ...rest } = req.body;
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

const resetPassword = async (req: UserRequest, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { password } = req.body;
    console.log('req.body', req.body);
    console.log('password', password);

    let token = req.query.token ? req.query.token.toString().replace(/d_O_t/g, '.') : null;

    if (!token) {
      return res.status(400).json({ error: 'Token is required in the query parameters.' });
    }

    const decode: any = jwt.verify(token as string, `${process.env.SECRET}`);
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

    const emailSend = await mailer.sendEmail(
      user.email,
      'NodeExpressTypeSriptStarterKit: Reset Password',
      resetPasswordEmailTemplate(
        user.firstName,
        resetUrl,
      ),
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

export { signup, login, resetPassword, resetPasswordThroughEmail };
