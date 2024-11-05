const express = require("express");
const dotenv = require("dotenv");
const prisma = require("./db/prisma");

dotenv.config();

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create-user", async (req, res) => {
  await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
    },
  });
  const users = await prisma.user.findMany();

  const names = users.map((user) => user.name);

  res.send(
    `There are ${names.length} users with names of: ${names.join(", ")}`
  );
});

app.listen(port, () => console.log(`App is working on port ${port}`));
