import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { UserLogin } from "../interfaces";
import { userRepo } from "../repositories";
import AppError from "../errors/AppError.error";

const login = async (data: UserLogin) => {
  const user = await userRepo.findOneBy({ email: data.email });

  if (!user) {
    throw new AppError("Invalid user", 401);
  }

  if (!bcryptjs.compareSync(data.password, user.password)) {
    throw new AppError("Wrong password", 401);
  }

  const token = jwt.sign(
    { email: user.email, isAdmin: user.isAdmin },
    process.env.JWT_SECRET_KEY!,
    {
      subject: user.id, // a quem esse token pertence
      expiresIn: process.env.JWT_EXPIRES_IN, // tempo de expiração do token
    }
  );

  return token;
};

export default {
  login,
};
