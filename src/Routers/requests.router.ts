/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Router } from "express";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";
import { PrismaClient } from "@prisma/client";
import {
  clientAuthenticationMiddleware,
  artistAuthenticationMiddleware,
  // @ts-ignore
} from "./auth-utils.ts";
import { TattooRequest } from "../types/interface";
const prisma = new PrismaClient();

const tattooRequestsRouter = Router();

//no auth required
tattooRequestsRouter.get("/", async (_req, res) => {
  const tattooRequests = await prisma.tattooRequest.findMany();
  res.status(200).send(tattooRequests);
});

//no auth required
tattooRequestsRouter.get("/:id", async (req, res) => {
  const id = +req.params.id;
  const tattooRequest = await prisma.tattooRequest
    .findUnique({
      where: {
        id,
      },
    })
    .catch(() => "server-error");
  if (tattooRequest === "server-error") {
    return res.status(400).send({ message: "id should be a number" });
  }
  if (!tattooRequest) {
    return res.status(204).send({ error: "Nothing found" });
  }
  return res.status(200).send(tattooRequest);
});

const tattooRequestSchema = z.object({
  clientName: z.string(),
  artistName: z.string(),
  messageBody: z.string(),
  approvalStatus: z.string(),
  tattooOfInterestTitle: z.string(),
  artistId: z.number(),
  clientId: z.number(),
  id: z.number(),
});
const createTattooRequestSchema = tattooRequestSchema.omit({ id: true }).strict();

//client authentication used
tattooRequestsRouter.post(
  "/",
  validateRequest({
    body: createTattooRequestSchema,
  }),
  clientAuthenticationMiddleware,
  async (req, res) => {
    try {
      const newTattooRequest = await prisma.tattooRequest.create({
        data: {
          ...req.body,
        },
      });
      res.status(201).send(newTattooRequest);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Server Side Error" });
    }
  }
);

//artist authentication and authorization needed
const updateTattooRequestSchema = createTattooRequestSchema.partial();
tattooRequestsRouter.patch(
  "/:id",
  artistAuthenticationMiddleware,
  validateRequest({
    body: updateTattooRequestSchema.strict().partial(),
  }),
  async (req, res) => {
    const authorizedArtistId = req.user!.id!;
    const id = +req.params.id;
    try {
      const updateTattooRequest: TattooRequest = await prisma.tattooRequest.update({
        where: {
          id,
          artistId: authorizedArtistId,
        },
        data: {
          approvalStatus: req.body.approvalStatus,
        },
      });
      return res.status(201).send(updateTattooRequest);
    } catch (e) {
      return res
        .status(204)
        .send({ error: "Nothing found in your authorized request list" });
    }
  }
);

export { tattooRequestsRouter };
