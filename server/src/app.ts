import express, { Request, Response, Application } from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";
const app: Application = express();
import fs from "fs-extra";
import path from "path";

// middlewares
app.use(express.json());
app.use(morgan("dev"));
// app.use(
//   cors({
//     origin: "http://192.168.0.8:3000",
//     optionsSuccessStatus: 200,
//   })
// );
app.use(cors()); // allows any device with no rectrictions, not recommended

// settings
app.set("port", process.env.PORT || 8000);

// routes
app.get("/", (req: Request, res: Response): void => {
  res.json({
    message: "server is running successfully",
    documentation:
      "https://github.com/Fredvel123/todo-list/tree/master/server/#readme",
  });
});
// routers - users
import usersRouter from "./code/users/routers/users.router";
app.use("/api/users", usersRouter);

// router  - auth
import authRouter from "./code/auth/routers/auth.router";
app.use("/api/auth", authRouter);

// router  - tasks
import tasksRouter from "./code/tasks/routers/tasks.routers";
app.use("/api/tasks", tasksRouter);

// create assets file if not exists
fs.ensureDir(path.join(__dirname, "./assets"), (err) => {
  if (err) {
    console.log(err);
  }
});

export default app;
