import { Router } from "express";
import userAccountRouter from "../routes/user-account-routes";
import fileUploadRouter from "./file-upload.routes";

const routeHandler: Router = Router();

routeHandler.use("/bsit3b-api", [userAccountRouter, fileUploadRouter]);
export default routeHandler