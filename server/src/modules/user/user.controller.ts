import { Request, Response } from "express";
import * as userService from "./user.service";

export const getUser = async (req: Request, res: Response) => {
  const data = await userService.getUser();
  res.json(data);
};