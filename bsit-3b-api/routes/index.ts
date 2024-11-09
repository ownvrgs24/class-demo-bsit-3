import { Router } from "express";
import userAccountRouter from "../routes/user-account-routes";

const routeHandler: Router = Router();

routeHandler.use("/bsit3b-api", userAccountRouter);

export default routeHandler;