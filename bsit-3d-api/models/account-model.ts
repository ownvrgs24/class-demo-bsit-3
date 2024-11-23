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
        return await prisma.userAccount.findMany()
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

        })
    }

    async createUserAccount(
        {
            email,
            password,
            suffix,
            middle_name,
            first_name,
            last_name
        }: {
            email: string, password: string,
            suffix: string;
            middle_name: string;
            first_name: string,
            last_name: string
        }) {
        return await prisma.userAccount.create({
            data: {
                email,
                password,
                first_name,
                last_name,
                middle_name,
                suffix
            }
        })
    }
}