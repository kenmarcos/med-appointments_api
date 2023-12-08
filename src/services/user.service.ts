import { UserCreate } from "../interfaces";
import { userRepo } from "../repositories";
import { userSchema } from "../schemas";

const create = async (data: UserCreate) => {
  const newUser = userRepo.create(data);

  await userRepo.save(newUser);

  return userSchema.response.parse(newUser);
};

export default {
  create,
};
