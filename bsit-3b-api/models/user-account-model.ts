import { User } from "@prisma/client";
import prisma from "../config/prisma-config";

export default class UserAccountModel {


    async deleteUserAccount(user_id: string): Promise<User> {
        return await prisma.user.delete({
            where: {
                user_id
            }
        })
    }

    async updateUserAccount(user_id: string, data: {} | User): Promise<User> {
        return await prisma.user.update({
            where: {
                user_id
            },
            data
        })
    }

    async getUserAccountByEmail(email: string): Promise<User | null> {
        return await prisma.user.findUnique({
            where: {
                email
            }
        })
    }

    async createUserAccount({ email, password, suffix, middle_name, first_name, last_name }: {
        email: string,
        password: string,
        suffix: string;
        middle_name: string;
        first_name: string,
        last_name: string
    }): Promise<User> {
        return await prisma.user.create({
            data: {
                email,
                password,
                suffix,
                middle_name,
                first_name,
                last_name
            }
        })
    }
}