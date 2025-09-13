import { Request, Response, NextFunction } from "express";

export const listTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    throw new Error("Weird Error");
    res.status(200).json(["task1", "task2", "task3"]);
  } catch (error) {
    next(error);
  }
};

export const getTasks = (req: Request, res: Response) => {
  res.status(200).json([{ id: 1, name: "task1" }]);
};
