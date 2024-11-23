import { Router } from "express";
import accountRouter from "./account-routes";
import uploadRouter from "./upload-routes";
import taskRouter from "./task-routes";
import { uploadFile } from "../controllers/upload-controller";

const routeHandler: Router = Router();

routeHandler.use("/bsit3d-api", [accountRouter, uploadRouter, taskRouter]);

export default routeHandler;