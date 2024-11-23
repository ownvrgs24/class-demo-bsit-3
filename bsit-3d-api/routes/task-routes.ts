import { Router } from "express";
import { getTasks, createTask, deleteTask, editTask } from "../controllers/task-controller";

const taskRouter = Router();

taskRouter.get("/tasks/:account_id", getTasks);
taskRouter.post("/tasks", createTask);
taskRouter.delete("/tasks/:id", deleteTask);
taskRouter.put("/tasks", editTask);

export default taskRouter;