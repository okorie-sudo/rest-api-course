import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import AuthenticationError from "../errors/AuthenticationError";
import config from "../config";

const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AuthenticationError({
      message: "authorization header missing or malformed",
      statusCode: 401,
      code: "ERR_AUTH",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, config.jwt);
    req.auth = { payload: decoded as JwtPayload, token };
    next();
  } catch (err) {
    throw new AuthenticationError({
      message: "You are not authorized",
      statusCode: 403,
      code: "ERR_AUTH",
    });
  }
};

export default authenticateUser;
