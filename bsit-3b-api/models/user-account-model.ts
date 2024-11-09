import { UserAccount } from "@prisma/client";
import prisma from "../config/prisma-config";

export default class UserAccountModel {

    async deleteUserAccount(account_id: string): Promise<UserAccount> {
        return await prisma.userAccount.delete({
            where: {
                account_id
            }
        })
    }

    async updateUserAccount(account_id: string, data: {} | UserAccount): Promise<UserAccount> {
        return await prisma.userAccount.update({
            where: {
                account_id
            },
            data
        })
    }

    async getUserAccountByEmail(email: string): Promise<UserAccount | null> {
        return await prisma.userAccount.findUnique({
            where: {
                email
            }
        })
    }

    async createUserAccount({ email, password,
        profile: { suffix, middle_name, first_name, last_name }
    }: {
        email: string, password: string, profile: {
            suffix: string;
            middle_name: string;
            first_name: string,
            last_name: string
        }
    }): Promise<UserAccount> {
        return await prisma.userAccount.create({
            data: {
                email,
                password,
                profile: {
                    create: {
                        first_name,
                        last_name,
                        middle_name,
                        suffix
                    }
                }
            }
        })
    }
}