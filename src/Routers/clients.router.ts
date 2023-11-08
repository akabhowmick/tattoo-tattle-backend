/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Router } from "express";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";
import { PrismaClient } from "@prisma/client";
import { Client, UnsecuredClientInfo } from "../types/interface";
import {
  comparePassword,
  createTokenForUser,
  createUnsecuredInfo,
  clientAuthenticationMiddleware,
  encryptPassword,
  // @ts-ignore
} from "./auth-utils.ts";
const prisma = new PrismaClient();

const clientsRouter = Router();

clientsRouter.get("/", async (_req, res) => {
  const clients = await prisma.client.findMany();
  res.status(200).send(clients);
});

clientsRouter.get("/:id", async (req, res) => {
  const id = +req.params.id;
  const client = await prisma.client
    .findUnique({
      where: {
        id,
      },
    })
    .catch(() => "server-error");
  if (client === "server-error") {
    return res.status(400).send({ message: "id should be a number" });
  }
  if (!client) {
    return res.status(204).send({ error: "No Content" });
  }
  return res.status(200).send(client);
});

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});
clientsRouter.post(
  "/login",
  validateRequest({
    body: loginSchema,
  }),
  async (req, res) => {
    const { email, password } = req.body;
    const client = await prisma.client
      .findUnique({
        where: {
          email,
        },
      })
      .catch();
    if (!client) {
      return res.status(204).send({ error: "No Content" });
    } else {
      const checkPassword: boolean = await comparePassword(
        password,
        client!.password
      );
      if (checkPassword) {
        const userInfo = createUnsecuredInfo(client as Client);
        const userToken = await createTokenForUser(
          userInfo as UnsecuredClientInfo
        );
        return res.status(200).send({ token: userToken, user: userInfo });
      }
      return res.status(401).send({ message: "Invalid password" });
    }
  }
);

//no auth required
const clientSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  phoneNumber: z.string(),
  type: z.string(),
  id: z.number(),
});
const createClientSchema = clientSchema.omit({ id: true }).strict();
clientsRouter.post(
  "/",
  validateRequest({
    body: createClientSchema,
  }),
  async (req, res) => {
    try {
      const newClient = await prisma.client.create({
        data: {
          ...req.body,
          password: await encryptPassword(req.body.password),
        },
      });
      const userInfo = createUnsecuredInfo(newClient as Client);
      const userToken = await createTokenForUser(
        userInfo as UnsecuredClientInfo
      );
      res.status(201).send({ token: userToken, user: userInfo });
    } catch (e) {
      console.log(e);
      res.status(500).send({ error: e });
      throw e;
    }
  }
);

//artist authentication and authorization needed
const updateClientSchema = createClientSchema.partial();
clientsRouter.patch(
  "/:id",
  validateRequest({
    body: updateClientSchema.strict().partial(),
  }),
  clientAuthenticationMiddleware,
  async (req, res) => {
    const id = +req.params.id;
    const authorizedClientEmail = req.user!.email!;
    try {
      const updateClient: Client = await prisma.client.update({
        where: {
          id,
          email: authorizedClientEmail,
        },
        data: {
          email: req.body.email,
          password: await encryptPassword(req.body.password!),
        },
      });
      const userInfo = createUnsecuredInfo(updateClient as Client);
      const userToken = await createTokenForUser(
        userInfo as UnsecuredClientInfo
      );
      res.status(201).send({ token: userToken, user: userInfo })
    } catch (e) {
      return res
        .status(204)
        .send({ error: "Nothing found in your authorized request list" });
    }
  }
);

export default clientsRouter;
