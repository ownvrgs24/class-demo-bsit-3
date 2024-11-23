import { Request, Response } from "express";
import UserAccountModel from "../models/user-account-model";
import { comparePassword, hashPassword } from "../utils/auth";


const account = new UserAccountModel();

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await account.getUserAccountByEmail(email);
        if (!user) {
            res.status(404).json({ message: "User account not found" });
            return;
        }
        
        const isPasswordMatch = await comparePassword(password, user.password);

        if (!isPasswordMatch) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }
        res.status(200).json({
            message: "Login successful",
            data: user
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        let data = req.body;
        data = { ...data, password: await hashPassword(data.password) };
        const result = await account.createUserAccount(data);
        res.status(201).json(result);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}

export const getUserAccountByEmail = async (req: Request, res: Response) => {
    try {
        const email = req.params.email;
        const result = await account.getUserAccountByEmail(email);
        res.status(200).json(result);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}

export const updateUserAccount = async (req: Request, res: Response) => {
    try {
        const account_id = req.params.account_id;
        const data = req.body;
        const result = await account.updateUserAccount(account_id, data);
        res.status(200).json(result);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}

export const deleteUserAccount = async (req: Request, res: Response) => {
    try {
        const account_id = req.params.account_id;
        const result = await account.deleteUserAccount(account_id);
        res.status(200).json({
            message: "User account deleted successfully",
            data: result
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}
