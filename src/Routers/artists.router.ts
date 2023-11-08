/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Router } from "express";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";
import { PrismaClient } from "@prisma/client";
import { Artist, UnsecuredArtistInfo } from "../types/interface";
import {
  comparePassword,
  createTokenForUser,
  createUnsecuredInfo,
  artistAuthenticationMiddleware,
  encryptPassword,
  // @ts-ignore
} from "./auth-utils.ts";

const prisma = new PrismaClient();

const artistsRouter = Router();

artistsRouter.get("/", async (_req, res) => {
  const artists = await prisma.artist.findMany();
  res.status(200).send(artists);
});

artistsRouter.get("/:id", async (req, res) => {
  const id = +req.params.id;
  const artist = await prisma.artist
    .findUnique({
      where: {
        id,
      },
    })
    .catch(() => "server-error");
  if (artist === "server-error") {
    return res.status(400).send({ message: "id should be a number" });
  }
  if (!artist) {
    return res.status(204).send({ error: "No Content" });
  }
  return res.status(200).send(artist);
});

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});
artistsRouter.post(
  "/login",
  validateRequest({
    body: loginSchema,
  }),
  async (req, res) => {
    const { email, password } = req.body;
    const artist = await prisma.artist
      .findUnique({
        where: {
          email,
        },
      })
      .catch();
    if (!artist) {
      return res.status(204).send({ error: "No Content" });
    } else {
      const checkPassword: boolean = await comparePassword(
        password,
        artist!.password
      );
      if (checkPassword) {
        const userInfo = createUnsecuredInfo(artist as Artist);
        const userToken = await createTokenForUser(
          userInfo as UnsecuredArtistInfo
        );
        return res.status(200).send({ token: userToken, user: userInfo });
      }
      return res.status(401).send({ message: "Invalid password" });
    }
  }
);

// no auth needed to make a new artist
const artistSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  phoneNumber: z.string(),
  type: z.string(),
  id: z.number(),
  statesLocation: z.string(),
  tattooStyles: z.string(),
});
const createArtistSchema = artistSchema.omit({ id: true }).strict();

artistsRouter.post(
  "/",
  validateRequest({
    body: createArtistSchema,
  }),
  async (req, res) => {
    try {
      const newArtist = await prisma.artist.create({
        data: {
          ...req.body,
          password: await encryptPassword(req.body.password),
        },
      });
      const userInfo = createUnsecuredInfo(newArtist as Artist);
      const userToken = await createTokenForUser(
        userInfo as UnsecuredArtistInfo
      );
      res.status(201).send({ token: userToken, user: userInfo });
    } catch (e) {
      console.log(e);
      res.status(500).send({ error: e });
    }
  }
);

//artist authentication and authorization needed
const updateArtistSchema = createArtistSchema.partial();
artistsRouter.patch(
  "/:id",
  validateRequest({
    body: updateArtistSchema.strict().partial(),
  }),
  artistAuthenticationMiddleware,
  async (req, res) => {
    const id = +req.params.id;
    const authorizedArtistEmail = req.user!.email!;
    try {
      const updateArtist: Artist = await prisma.artist.update({
        where: {
          id,
          email: authorizedArtistEmail,
        },
        data: {
          email: req.body.email,
          password: await encryptPassword(req.body.password!),
        },
      });
      const userInfo = createUnsecuredInfo(updateArtist as Artist);
      const userToken = await createTokenForUser(
        userInfo as UnsecuredArtistInfo
      );
      res.status(201).send({ token: userToken, user: userInfo });
    } catch (e) {
      return res
        .status(204)
        .send({ error: "Nothing found in your authorized request list" });
    }
  }
);

export { artistsRouter };
