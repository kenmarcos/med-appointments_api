import { z } from "zod";
import { userSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

export type UserCreate = z.infer<typeof userSchema.create>;
export type UserBodyUpdate = z.infer<typeof userSchema.update>;
export type UserUpdate = DeepPartial<UserBodyUpdate>;

export type UserResponse = z.infer<typeof userSchema.response>;
export type UserLogin = z.infer<typeof userSchema.login>;
export type UserLoginResponse = { token: string };

export type UserRepo = Repository<User>;
