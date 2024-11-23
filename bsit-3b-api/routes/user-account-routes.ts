import { Router } from "express";

import {
    create,
    getUserAccountByEmail,
    updateUserAccount,
    deleteUserAccount,
    login
} from "../controllers/user-account-controller";

const userAccountRouter = Router();

userAccountRouter.post("/user-account", create);
userAccountRouter.get("/user-account/:email", getUserAccountByEmail);
userAccountRouter.put("/user-account/:account_id", updateUserAccount);
userAccountRouter.delete("/user-account/:account_id", deleteUserAccount);

userAccountRouter.post("/login", login);



export default userAccountRouter;