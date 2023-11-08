/*
  Warnings:

  - You are about to drop the `Request` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Request";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "TattooRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clientName" TEXT NOT NULL,
    "artistName" TEXT NOT NULL,
    "messageBody" TEXT NOT NULL,
    "approvalStatus" TEXT NOT NULL,
    "tattooOfInterestTitle" TEXT NOT NULL,
    "clientId" INTEGER NOT NULL,
    "artistId" INTEGER NOT NULL,
    CONSTRAINT "TattooRequest_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "TattooRequest_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
