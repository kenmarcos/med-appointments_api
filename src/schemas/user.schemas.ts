import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  name: z.string().max(120),
  email: z.string().email().max(120),
  isAdmin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

export const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

export const userWithoutAdmin = userCreateSchema.omit({
  isAdmin: true,
});

export const userUpdateSchema = userWithoutAdmin.partial();

export const userResponseSchema = userSchema.omit({
  password: true,
});

export const userReadSchema = userResponseSchema.array();

export const userLoginSchema = userSchema.pick({
  email: true,
  password: true,
});
