import { info, log } from "console";
import { prisma } from "../config/prisma.client";

const seedDatabase = async () => {
  info("SEEDING STARTED");
  await prisma.$connect().then(async () => {
    // await SeederUsers(process.env.SEEDLIMIT as unknown as number);
  });
  info("SEEDING ENDED");
};

seedDatabase()
  .catch((error) => {
    log("error", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
    log("Database connection closed");
  });
