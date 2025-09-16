import { Request, Response } from "express";
import prisma from "../../../prisma-client";

export const listProjects = async (req: Request, res: Response) => {
  const projects = await prisma.project.findMany({
    where: {
      user_id: req.auth?.payload.sub,
    },
  });
  res.status(200).json({ projects });
};

export const getProject = async (req: Request, res: Response) => {
  const project = await prisma.project.findUnique({
    where: {
      id: req.params.id,
      user_id: req.auth?.payload.sub,
    },
  });
  res.status(200).json({ project });
};

export const listProjectTask = async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany({
    where: {
      project_id: req.params.id,
      user_id: req.auth?.payload.sub,
    },
  });
  res.status(200).json({ tasks });
};
