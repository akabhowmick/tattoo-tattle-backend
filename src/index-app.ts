/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import express from "express";
import cors from "cors";
// @ts-ignore
import { favoritesRouter } from "./Routers/favorites.router.ts";
// @ts-ignore
import clientsRouter from "./Routers/clients.router.ts";
// @ts-ignore
import { artistsRouter } from "./Routers/artists.router.ts";
// @ts-ignore
import { tattooRequestsRouter } from "./Routers/requests.router.ts";
// @ts-ignore
import { tattoosRouter } from "./Routers/tattoos.router.ts";
import { Artist, Client } from "./types/interface";

const app = express();

declare global {
  namespace Express {
    interface Request {
      user?: Artist | Client;
    }
  }
}

app.use(cors());
app.use(express.json());

app.use("/clients", clientsRouter);
app.use("/artists", artistsRouter);
app.use("/tattoos", tattoosRouter);
app.use("/tattooRequests", tattooRequestsRouter);
app.use("/favorites", favoritesRouter);

app.listen(3000);
