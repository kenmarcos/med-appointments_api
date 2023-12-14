import { User } from "../entities";
import { UserBodyUpdate, UserCreate, UserUpdate } from "../interfaces";
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

const update = async (user: User, data: UserBodyUpdate) => {
  const updatedUser = userRepo.create({ ...user, ...data });
  await userRepo.save(updatedUser);

  return userSchema.response.parse(updatedUser);
};

const remove = async (user: User) => {
  await userRepo.softRemove(user);
};

export default {
  create,
  readAll,
  update,
  remove,
};
