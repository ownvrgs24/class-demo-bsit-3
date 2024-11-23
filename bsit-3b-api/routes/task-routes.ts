import { Router } from "express";

import {
    createTask,
    getTasks,
    deleteTask,
    updateTask
} from "../controllers/task-controller";

const taskRouter = Router();

taskRouter.post("/task", createTask);
taskRouter.get("/task/:user_id", getTasks);
taskRouter.delete("/task/:id", deleteTask);
taskRouter.put("/task/:id", updateTask);

export default taskRouter;