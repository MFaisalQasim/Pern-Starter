import express from 'express';
import { signup, login, resetPassword, resetPasswordThroughEmail, stripePay, createPaymentIntent, createCheckOutSession } from '../controllers/user.controller';
import authenticated from '../middlewares/auth.middleware';
import { ROLES } from '../config/enums';
import grantAccess from '../middlewares/access.middleware';
import { signUpValidation } from '../validation/user.validation';
import { validationWrapper } from '../utils';

const userRouter = express.Router();
const { ADMIN, USER } = ROLES;

userRouter.route('/create-payment-intent').post(createPaymentIntent);

userRouter.route("/stripe-pay").post(stripePay);
userRouter.route("/create-checkout-session").post(createCheckOutSession);

userRouter.route('/signup').post(
  signUpValidation,
  validationWrapper(signup) as any,
);
userRouter.route('/login').post(login);

userRouter.route('/reset-password-through-email').post(resetPasswordThroughEmail);
userRouter.use(authenticated as any);

userRouter.route('/reset-password').post(
  grantAccess(ADMIN, USER) as any,
  resetPassword);

export default userRouter;
