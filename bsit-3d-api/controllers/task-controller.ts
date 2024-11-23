import { Request, Response } from "express";
import TaskModel from "../models/task-model";

const task = new TaskModel();

export const getTasks = async (req: Request, res: Response) => {
    try {
        const account_id = req.params.account_id;
        const result = await task.getTasks(account_id);
        res.status(200).json(result);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
};

export const createTask = async (req: Request, res: Response) => {
    try {
        const result = await task.addTask(req.body);
        res.status(201).json(result);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}

export const deleteTask = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        await task.deleteTask(id);
        res.status(204).end();
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}

export const editTask = async (req: Request, res: Response) => {
    try {
        const { id, task_name } = req.body;
        await task.editTask(id, task_name);
        res.status(204).end();
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}