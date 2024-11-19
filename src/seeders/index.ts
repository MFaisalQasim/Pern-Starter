import { prisma } from '../config/prisma.client';
import { info, log } from 'console';
import SeedUsers from '../seeders/user.seeder';

const seedDatabase = async () => {
  info('SEEDING STARTED');
  await prisma.$connect().then(async () => {
    await SeedUsers(process.env.SEED_LIMIT as unknown as number);
  });
  info('SEEDING ENDED');
};

seedDatabase()
  .catch((err) => {
    log(`error: ${err}`);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
