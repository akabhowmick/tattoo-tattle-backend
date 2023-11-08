import * as jose from "jose";
import bcrypt from "bcryptjs";
import {
  Artist,
  Client,
  UnsecuredArtistInfo,
  UnsecuredClientInfo,
} from "../types/interface";
import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const encryptPassword = (password: string) => {
  return bcrypt.hash(password, 11);
};

export const comparePassword = (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword);
};

export const SECRET_API_KEY = new TextEncoder().encode(
  "cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2"
);
const alg = "HS256";

export const createTokenForUser = async (
  user: UnsecuredArtistInfo | UnsecuredClientInfo
) => {
  const jwt = await new jose.SignJWT(user)
    .setProtectedHeader({ alg })
    .sign(SECRET_API_KEY);
  return jwt;
};

export const createUnsecuredInfo = (user: Artist | Client) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...info } = Object.assign({}, user);
  return info;
};

export const getDataFromAuthToken = async (token?: string) => {
  if (!token) {
    return false;
  }
  try {
    const { payload } = await jose.jwtVerify(token, SECRET_API_KEY);
    return payload;
  } catch (error) {
    return false;
  }
};

export const clientAuthenticationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const [, token] = req.headers.authorization?.split?.(" ") || [];
  const verifiedUser = await getDataFromAuthToken(token);
  if (!verifiedUser) {
    return res.status(401).json({ message: "Invalid token." });
  }
  const idFromJwt: number = verifiedUser.id as number;
  const userFromJwt = await prisma.client.findFirst({
    where: {
      id: idFromJwt,
    },
  });

  if (!userFromJwt) {
    return res.status(401).json({ message: "User not found." });
  }
  req.user = userFromJwt as Client;
  next();
};

export const artistAuthenticationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const [, token] = req.headers.authorization?.split?.(" ") || [];
  const verifiedUser = await getDataFromAuthToken(token);
  if (!verifiedUser) {
    return res.status(401).json({ message: "Invalid token." });
  }
  const idFromJwt: number = verifiedUser.id as number;
  const userFromJwt = await prisma.artist.findFirst({
    where: {
      id: idFromJwt,
    },
  });

  if (!userFromJwt) {
    return res.status(401).json({ message: "User not found." });
  }
  req.user = userFromJwt as Artist;
  next();
};
