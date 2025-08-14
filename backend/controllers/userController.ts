import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.json({ message: "List of users" });
};
