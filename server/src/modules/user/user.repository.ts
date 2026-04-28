import prisma from "../../shared/database/prisma";
import { CreateUserInput } from "./user.type";

export const createUser = async (data: CreateUserInput) => {
  return prisma.user.create({
    data
  });
};

export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: { email }
  });
};