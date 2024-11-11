import express from "express";

import { signup, login, resetPassword } from "../controllers/user.controller";
import authenticated from "../middlewares/auth.middleware";

const userRouter = express.Router();

userRouter.route("/signup").post(signup);
userRouter.route("/login").post(login);

userRouter.use(authenticated as any);
userRouter.route("/reset-password").post(resetPassword);

export default userRouter;
