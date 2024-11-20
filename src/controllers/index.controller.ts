import { Response, NextFunction } from 'express';
import { UserRequest } from '../interface';

export const index = async (req: UserRequest, res: Response, next: NextFunction) => {
  try {
    console.log('here');

    res.send('Hello World!');
  } catch (error) {
    return next({ error });
  }
};
