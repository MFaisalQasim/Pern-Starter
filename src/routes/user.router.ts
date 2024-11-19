import express from "express";
import { signup, login, resetPassword, resetPasswordThroughEmail } from "../controllers/user.controller";
import authenticatedHere from "../middlewares/auth.middleware";
import { ROLES } from "../config/enums";
import grantAccess from "../middlewares/access.middleware";
import { signUpValidation } from "../validation/user.validation";
import { validationWrapper } from "../utils";

const userRouter = express.Router();
const { ADMIN, USER } = ROLES;

// userRouter.route("/signup").post(signup);
userRouter.route("/signup").post(
  signUpValidation,
  // grantAccess(ADMIN, USER) as any,
  validationWrapper(signup) as any
);
userRouter.route("/login").post(login);

userRouter.route("/reset-password-through-email").post(resetPasswordThroughEmail);
userRouter.use(authenticatedHere as any);

userRouter.route("/reset-password").post(resetPassword);

export default userRouter;
