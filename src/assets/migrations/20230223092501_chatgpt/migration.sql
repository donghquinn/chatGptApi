-- CreateEnum
CREATE TYPE "RoleEnumType" AS ENUM ('admin', 'user');

-- CreateTable
CREATE TABLE "Image" (
    "uuid" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Users" (
    "uuid" TEXT NOT NULL,
    "clientid" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_uuid_key" ON "Image"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Users_uuid_key" ON "Users"("uuid");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_clientid_fkey" FOREIGN KEY ("clientid") REFERENCES "Image"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
