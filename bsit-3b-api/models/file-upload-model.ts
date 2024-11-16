import prisma from "../config/prisma-config";

export default class FileUploadModel {
    async uploadFile(file: Express.Multer.File, account_id: string) {
        await prisma.userAttachments.createMany({
            data: {
                account_id: account_id, // replace with actual account_id
                attachment_name: file.originalname,
                attachment_filepath: file.path,
                attachment_type: file.mimetype,
            }
        });
    }
}