-- CreateEnum
CREATE TYPE "Type" AS ENUM ('ACOUSTIC', 'ELECTRIC', 'BASS');

-- CreateEnum
CREATE TYPE "Kind" AS ENUM ('STRATOCASTER', 'TELECASTER', 'LES_PAUL');

-- CreateEnum
CREATE TYPE "OrderItem" AS ENUM ('GUITAR', 'STRINGS');

-- CreateTable
CREATE TABLE "Guitar" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "manufacturerName" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "stockAmount" INTEGER NOT NULL,
    "soldAmount" INTEGER NOT NULL,
    "type" "Type" NOT NULL,
    "kind" "Kind" NOT NULL,
    "price" INTEGER NOT NULL,
    "reviewScore" INTEGER NOT NULL DEFAULT 0,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guitar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerId" INTEGER NOT NULL,
    "orderItems" "OrderItem"[],

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "guitarId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_guitarId_fkey" FOREIGN KEY ("guitarId") REFERENCES "Guitar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Change column name from "generalType" to "type"
ALTER TABLE "Guitar" RENAME COLUMN "generalType" TO "type";

-- Change column name from "specificType" to "kind"
ALTER TABLE "Guitar" RENAME COLUMN "specificType" TO "kind";
