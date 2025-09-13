import { Request, Response } from "express";

export const listProjects = (req: Request, res: Response) => {
  res.status(200).json([
    { id: 1, name: "project1" },
    { id: 1, name: "project1" },
    { id: 1, name: "project1" },
  ]);
};

export const getProject = (req: Request, res: Response) => {
  res.status(200).json({ id: 1, name: "project1" });
};

export const listProjectTask = (req: Request, res: Response) => {
  res.status(200).json(["task1", "task2"]);
};
