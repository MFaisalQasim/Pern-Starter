import { PrismaClient } from "@prisma/client";

declare global {
  // Declaring the global variable for Prisma client
  var __db: PrismaClient | undefined;
}

// Initialize Prisma Client and attach it to the global scope
const prisma = global.__db || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.__db = prisma;

export { prisma };
