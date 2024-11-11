import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { HttpException } from "../exceptions/http.exception";

const errorMiddleware: ErrorRequestHandler = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
  // _: unknown,
): void => {
  console.error(
    `[${req.method}] ${req.path} >> StatusCode:: ${error?.status}, Message:: ${error?.message}`
  );

  res.status(error.status || 500).json({
    success: false,
    error:
      error.message ||
      error?.error ||
      error?.name ||
      error.stack ||
      error ||
      "Internal Server Error",
    status: error.status || 500,
  });
};

export default errorMiddleware;
