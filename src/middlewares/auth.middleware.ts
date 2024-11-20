import { NextFunction } from 'express';
import { UserRequest } from '../interface';
import JWT from 'jsonwebtoken';
import { prisma } from '../config/prisma.client';

export default async (req: UserRequest, _: Response, next: NextFunction): Promise<any> => {
  try {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
      const decode: any = await JWT.decode(token);
      if (!decode) {
        return next({
          status: 401,
          message: 'You Are Not Authenticated For This Route',
        });
      }

      const user = await prisma.user.findFirst({
        where: { id: decode.id },
      });

      if (!user) {
        return next({
          status: 401,
          message: 'No Authenticated User Found',
        });
      }
      req.user = user;
      next();
    } else {
      return next({
        status: 401,
        message: 'You Are Not Authenticated',
      });
    }
  } catch (error) {
    return next({ error });
  }
};
