import prisma from "../config/prisma-config";

export class UploadModel {
    public async uploadFile(file: Express.Multer.File, account_id: string) {
        // return await prisma.userFiles.create({
        //     data: {
        //         account_id: account_id,
        //         file_name: file.originalname,
        //         file_path: file.path,
        //         file_type: file.mimetype,
        //     }
        // })
    }
}