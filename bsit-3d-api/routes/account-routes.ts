import { Router } from "express";
import {
    create,
    getUserAccountByEmail,
    deleteAccount,
    getAllAccounts,
    updateUserAccount,
    login
} from "../controllers/account-controller";

const accountRouter = Router();

accountRouter.post("/accounts", create);
accountRouter.get("/accounts/:email", getUserAccountByEmail);
accountRouter.delete("/accounts/:account_id", deleteAccount);
accountRouter.get("/accounts", getAllAccounts);
accountRouter.put("/accounts/:account_id", updateUserAccount);

accountRouter.post("/login", login);

export default accountRouter;