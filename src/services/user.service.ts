import { UserCreate } from "../interfaces";
import { userRepo } from "../repositories";
import { userSchema } from "../schemas";

const create = async (data: UserCreate) => {
  const newUser = userRepo.create(data);

  await userRepo.save(newUser);

  return userSchema.response.parse(newUser);
};

const readAll = async () => {
  const users = await userRepo.find();

  return users;
};

export default {
  create,
  readAll,
};
