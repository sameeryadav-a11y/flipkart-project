import { Request, Response } from "express";
import * as authService from "./auth.services";

export const signup = async (req:Request, res:Response) => {
  try {
    const data = await authService.signupUser(req.body);
    res.json(data);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const data = await authService.loginUser(email, password);

    res.json(data);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};