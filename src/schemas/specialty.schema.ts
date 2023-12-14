import { z } from "zod";

const specialty = z.object({
  id: z.string(),
  name: z.string().max(120),
});

const create = specialty.omit({
  id: true,
});

const readAll = specialty.array();

export default {
  specialty,
  create,
  readAll,
};
