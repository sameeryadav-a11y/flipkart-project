import express from "express";
import userRoutes from "./modules/user/user.routes";
import { httpLogger } from "./shared/middleware/logger.middleware";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(httpLogger);

// Mount module routes
app.use("/user", userRoutes);

export default app;