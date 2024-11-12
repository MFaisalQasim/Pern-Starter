import express from "express";
import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});
import cors from "cors";
import http from "http";
import helmet from "helmet";
import loggerMiddleWare from "./middlewares/logger.middleware";
import indexRouter from "./routes/index.router";
import userRouter from "./routes/user.router";
import errorMiddleware from "./middlewares/error.middleware";

const app = express();
const server = http.createServer(app);
app.use(express.json({}));

const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "DNT",
      "X-CustomHeader",
      "Keep-Alive",
      "User-Agent",
      "X-Requested-With",
      "If-Modified-Since",
      "Cache-Control",
      "Content-Type",
      "Content-Range",
      "Range",
      "Authorization",
      "timezone",
    ],
  })
);

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleWare);

// Routes
app.use("/", indexRouter);
app.use("/user", userRouter);

app.use(errorMiddleware);

server.listen(PORT, async () => {
  try {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
  } catch (error) {
    console.log("error", error);
  }
});
