import { Task } from "@prisma/client";
import prisma from "../config/prisma-config";

export default class TaskModel {
    async createTask(body: Task): Promise<Task> {
        return await prisma.task.create({
            data: body
        })
    }

    async getTasks(user_id: string): Promise<Task[]> {
        return await prisma.task.findMany({
            where: {
                user_id,
            },
        })
    }

    async deleteTask(id: number): Promise<Task> {
        return await prisma.task.delete({
            where: {
                id
            }
        })
    }

    async updateTask(id: number, data: {} | Task): Promise<Task> {
        return await prisma.task.update({
            where: {
                id
            },
            data
        })
    }
}