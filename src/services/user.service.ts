import { User } from "../entities";
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

  return userSchema.readAll.parse(users);
};

const remove = async (user: User) => {
  await userRepo.softRemove(user);
};

export default {
  create,
  readAll,

  remove,
};
