import * as userRepo from "../user/user.repository";
import bcrypt from "bcrypt";
import { generateToken } from "../../shared/utils/jwt";


export const signupUser = async (data: any) => {
  const existing = await userRepo.findUserByEmail(data.email);

  if (existing) {
    throw new Error("User already exists");
  }
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = await userRepo.createUser({
    ...data,
    password: hashedPassword
  });

  const token = generateToken({
    id: user.id,
    role: user.role
  });

  return { user, token };
};

export const loginUser = async (email: string, password: string) => {
  const user = await userRepo.findUserByEmail(email);
  if (!user) {
    throw new Error("User not found");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }
  const token = generateToken({
    id: user.id,
    role: user.role
  });
  return { token };
};
