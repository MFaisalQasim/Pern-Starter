import { Request, Response, NextFunction } from 'express';
import { UserRequest } from '../interface';

export default (...roles: string[]) =>
  (req: UserRequest, res: Response, next: NextFunction) => {
    try {
      const userRole = req.user?.role;
      console.log('req.user.role', req.user.role);
      
      if (!roles.includes(userRole)) {
        return next({
          message: `User with ${userRole} role is not authorized for this action`,
          status: 403,
        });
      }

      next();
    } catch (error) {
      next(error);
    }
  };
