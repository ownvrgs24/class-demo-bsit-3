import { Task } from "@prisma/client";
import prisma from "../config/prisma-config";


export default class TaskModel {
    public async getTasks(account_id: string) {
        return await prisma.task.findMany({
            where: {
                account_id
            }
        });
    }

    public async addTask(body: Task) {
        return await prisma.task.create({
            data: body
        })
    }

    public async editTask(id: number, task_name: string) {
        return await prisma.task.update({
            where: {
                recno: id
            },
            data: {
                task_name
            }
        })
    }

    public async deleteTask(id: number) {
        return await prisma.task.delete({
            where: {
                recno: id
            }
        })
    }
}