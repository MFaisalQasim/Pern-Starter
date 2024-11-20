import { debug, warn } from 'console';
import { faker } from '@faker-js/faker';
import { prisma } from '../config/prisma.client';

export default async (num: number) => {
  warn('Seeding user collection');
  const users: any = [];
  for (let i = 0; i < num; i++) {
    const email = faker.internet.email;

    const user = {
      email: email(),
      password: '$2b$10$fESRhk9wK8nLdGPbmaKD/OypXZIsE96l6SfrQBdYzaDlIHY.3Ii92',
      role: faker.helpers.arrayElement(['ADMIN', 'USER']),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    };
    if (!users.includes(email)) {
      users.push(user);
    }
  }
  await prisma.user.createMany({ data: users });

  debug(`Total ${users.length} users added successfully`);
};
