import { NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import JSONbig from "json-bigint";
import { UserRequest, ValidationError } from "../interface";
import { validationResult } from "express-validator";

const getHashedPassword = async (password: string) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  } catch (error: any) {
    throw new Error(error);
  }
};

const createJwtToken = (id: any) =>
  jwt.sign({ id }, `${process.env.SECRET}`, { expiresIn: "3d" });

const parseBigJSON = (json: any) => JSONbig.parse(JSONbig.stringify(json));

const checkValidation = (req: Request) => {
  let errObj: { [key: string]: string } = {};

  const isError: any = validationResult(req);
  if (isError.errors.length > 0) {
    isError.errors.map((err: ValidationError) => {
      errObj[err.path] = err.msg;
    });
    return Object.keys(errObj).length ? errObj : null;
  } else return null;
};

const validationWrapper = (callback: Function) => {
  return (
    req: Request | UserRequest,
    res: Response,
    next: NextFunction
  ): any => {
    let errors = checkValidation(req as any);
    if (errors) {
      return next({ message: errors, status: 400 });
    } else {
      callback(req, res, next);
    }
  };
};
export {
  getHashedPassword,
  createJwtToken,
  parseBigJSON,
  checkValidation,
  validationWrapper,
};
