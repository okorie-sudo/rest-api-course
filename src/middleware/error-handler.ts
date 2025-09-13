import { NextFunction, Request, Response } from "express";
import config from "../config";
import { getErrorMessage } from "../utils";

export default function errorHandler(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (res.headersSent || config.debug) {
    next(error);
    return;
  }

  res.status(500).json({
    error: {
      message: getErrorMessage(error) || "Error: View logs for more details",
    },
  });
}
