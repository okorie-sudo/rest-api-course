import { Request, Response, NextFunction } from "express";
import prisma from "../../../prisma-client";
import EntityNotFoundError from "../../../errors/EntityNotFoundError";

export const listTasks = async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany({
    where: {
      user_id: req.auth?.payload.sub,
    },
  });
  res.status(200).json({ tasks });
};

export const getTask = async (req: Request, res: Response) => {
  const task = await prisma.task.findUnique({
    where: {
      id: req.params.id,
      user_id: req.auth?.payload.sub,
    },
  });

  if (!task) {
    throw new EntityNotFoundError({
      message: "task does not exist",
      statusCode: 404,
      code: "ERR_NF",
    });
  }
  res.status(200).json({ task });
};
