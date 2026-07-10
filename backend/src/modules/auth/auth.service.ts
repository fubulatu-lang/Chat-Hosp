import {
  createUser,
  findUserByEmail,
} from "./auth.repository";

import {
  hashPassword,
  comparePassword,
} from "../../lib/password";

import { signToken } from "../../lib/jwt";

export async function register(data: {
  fullName: string;
  email: string;
  password: string;
}) {
  const exists = await findUserByEmail(data.email);

  if (exists) {
    throw new Error("Email already exists.");
  }

  const password = await hashPassword(data.password);

  const user = await createUser({
    ...data,
    password,
  });

  const token = signToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  return {
    user,
    token,
  };
}

export async function login(
  email: string,
  password: string
) {
  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const valid = await comparePassword(
    password,
    user.password
  );

  if (!valid) {
    throw new Error("Invalid email or password.");
  }

  return {
    user,
    token: signToken({
      id: user.id,
      email: user.email,
      role: user.role,
    }),
  };
}