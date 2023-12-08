import { z } from "zod";

const user = z.object({
  id: z.string(),
  name: z.string().max(120),
  email: z.string().email().max(120),
  isAdmin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
});

const create = user.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const userWithoutAdmin = create.omit({
  isAdmin: true,
});

const update = userWithoutAdmin.partial();

const response = user.omit({
  password: true,
});

const read = response.array();

const login = user.pick({
  email: true,
  password: true,
});

export default {
  user,
  create,
  userWithoutAdmin,
  update,
  response,
  read,
  login,
};
