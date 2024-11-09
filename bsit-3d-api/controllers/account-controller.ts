import { Request, Response } from "express";
import AccountModel from "../models/account-model";

const account = new AccountModel();

export const updateUserAccount = async (req: Request, res: Response) => {
    try {
        const account_id = req.params.account_id;
        const data = req.body;
        const result = await account.updateUserAccount(account_id, data);
        res.status(200).json({
            message: "Account updated successfully",
            account: result
        });
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

export const create = async (req: Request, res: Response) => {
    try {
        const data = req.body;
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

export const deleteAccount = async (req: Request, res: Response) => {
    try {
        const account_id = req.params.account_id;
        const result = await account.deleteUserAccount(account_id);
        res.status(200).json({
            message: "Account deleted successfully",
            account: result
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}

export const getAllAccounts = async (req: Request, res: Response) => {
    try {
        const result = await account.getAllAccounts();
        res.status(200).json({
            message: "All accounts retrieved successfully",
            accounts: result
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}