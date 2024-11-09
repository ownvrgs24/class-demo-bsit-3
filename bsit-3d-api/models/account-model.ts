import prisma from "../config/prisma-config";

export default class AccountModel {

    async updateUserAccount(account_id: string, data: {} | any) {
        return await prisma.userAccount.update({
            where: {
                account_id
            },
            data
        })
    }

    async getAllAccounts() {
        return await prisma.userAccount.findMany({
            include: {
                profile: true
            }
        })
    }

    async deleteUserAccount(account_id: string) {
        return await prisma.userAccount.delete({
            where: {
                account_id
            }
        })
    }

    async getUserAccountByEmail(email: string) {
        return await prisma.userAccount.findUnique({
            where: {
                email
            },
            include: {
                profile: true
            }
        })
    }

    async createUserAccount(
        {
            email,
            password,
            profile: {
                suffix,
                middle_name,
                first_name,
                last_name
            }
        }: {
            email: string, password: string, profile: {
                suffix: string;
                middle_name: string;
                first_name: string,
                last_name: string
            }
        }) {
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