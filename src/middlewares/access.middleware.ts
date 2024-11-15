import { NextFunction } from "express";
import { UserRequest } from "../interface";

export default (...roles: string[]) =>
  (req: UserRequest, next: NextFunction) => {
    if (req.user.roles) {
      if (!roles.includes(req.user.roles)) {
        return next({
          message: `User with ${req.user.role} role is not authorizes fro this action`,
          status: 403,
        });
      }
      next();
    }
    return next({
      message: `No User Role Found`,
      status: 404,
    });
  };
