import { Request, Response } from "express";
import TaskModel from "../models/task-model";

const task = new TaskModel();

export const createTask = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await task.createTask(data);
        res.status(201).json(result);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}

export const getTasks = async (req: Request, res: Response) => {
    try {
        const user_id = req.params.user_id;
        const result = await task.getTasks(user_id);
        res.status(200).json(result);
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
        const result = await task.deleteTask(id);
        res.status(200).json(result);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}

export const updateTask = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const result = await task.updateTask(id, data);
        res.status(200).json(result);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}