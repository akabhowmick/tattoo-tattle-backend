import { PrismaClient } from "@prisma/client";
import { db_reseed } from "../dbCopy.js";
const prisma = new PrismaClient();

async function main() {
  for (let artist of db_reseed.artists) {
    await prisma.artist.create({
      data: artist,
    });
  }
  for (let client of db_reseed.clients) {
    await prisma.client.create({
      data: client,
    });
  }
  console.log("Done with creating client and artist");
}

async function main2() {
  for (let tattoo of db_reseed.tattoos) {
    await prisma.tattoo.create({
      data: tattoo,
    });
  }
  for (let tattooRequest of db_reseed.tattooRequests) {
    await prisma.tattooRequest.create({
      data: tattooRequest,
    });
  }
  for (let favorite of db_reseed.favorites) {
    await prisma.favorite.create({
      data: favorite,
    });
  }
  console.log("Done with creating the rest");
}

main().then(
  main2()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      // eslint-disable-next-line no-undef
      process.exit(1);
    })
);
