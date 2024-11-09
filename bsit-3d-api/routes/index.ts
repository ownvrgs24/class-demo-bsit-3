import { Router } from "express";
import accountRouter from "./account-routes";

const routeHandler: Router = Router();

routeHandler.use("/bsit3d-api", accountRouter);

export default routeHandler;