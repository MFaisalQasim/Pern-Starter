import express from "express";

import { index } from "../controllers/index.controller";

const indexRouter = express.Router();

indexRouter.route("/").get(index);

export default indexRouter;
