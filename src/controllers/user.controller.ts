import { jwt } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";
import { UserRequest } from "../interface";
import { prisma } from "../config/prisma.client"; // Import the Prisma client here
import {
  createJwtToken,
  getHashedPassword,
  parseBigJSON,
} from "../utils/index";

const login = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    console.log("body", req.body);

    const { email, password } = req.body;

    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) return next({ status: 404, error: "User Not Exist" });
    // if (!user) res.send({ status: 404, error: "User Not Exist" });

    const match = await bcrypt.compare(password, user?.password);

    if (!match) {
      res.send({ status: 404, error: "Invalid email or password" });
    }

    const token = createJwtToken(user?.id);

    //@ts-ignore
    delete user.password;

    return res.status(200).json(parseBigJSON({ success: true, user, token })); // Use one res.send here
  } catch (error) {
    return next({ error });
  }
};

const signup = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    console.log("body here", req.body);

    const { name, email, password } = req.body;
    const hashedPassword = await getHashedPassword(password);

    const user = await prisma.user.findFirst({ where: { email } });
    // if (user) res.send({ status: 405, message: "User Already Exist" });
    if (user) return next({ status: 405, message: "User Already Exist" });

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return res.status(200).json(parseBigJSON({ success: true, newUser })); // Use one res.send here
  } catch (error) {
    return next({ error });
  }
};

const resetPassword = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    let { newPassword } = req.body;
    let token = req.query.token.toString().replace(/d_O_t/g, ".");

    const decode: any = jwt.verify(token as string, `${process.env.SECRET}`);
    const user = await prisma.user.findFirst({
      where: { id: decode.id },
    });

    if (!user) {
      return next({ status: 404, error: "No User Found" });
    }

    const hashedPassword = await getHashedPassword(newPassword);
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });
    return res
      .status(200)
      .json(
        parseBigJSON({ success: true, message: "Password Reset Successful" })
      ); // Use one res.send here
  } catch (error: any) {
    if (error.message == "jwt malformed") {
      return next({ status: 400, error: "Invalid Token" });
    }
    return next({ error: error.message });
  }
};

export { signup, login, resetPassword };
