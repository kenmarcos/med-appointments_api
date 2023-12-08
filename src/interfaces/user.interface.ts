import { z } from "zod";
import {
  userCreateSchema,
  userLoginSchema,
  userResponseSchema,
  userUpdateSchema,
} from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

export type UserCreate = z.infer<typeof userCreateSchema>;
export type UserBodyUpdate = Omit<UserCreate, "admin">;
export type UserUpdate = DeepPartial<UserBodyUpdate>;

export type UserResponse = z.infer<typeof userResponseSchema>;
export type UserLogin = z.infer<typeof userLoginSchema>;
export type UserLoginResponse = { token: string };

export type UserRepo = Repository<User>;
