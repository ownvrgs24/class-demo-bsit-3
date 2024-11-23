import { Request, Response } from "express";
import FileUploadModel from "../models/file-upload-model";

const upload = new FileUploadModel();

export const uploadFile = async (req: Request, res: Response) => {
    // try {
    //     if (req.file) {
    //         const file = req.file;
            
    //         const account_id = req.body.account_id;
            
    //         await upload.uploadFile(file, account_id);

    //         res.status(200).json({ message: "File uploaded successfully" });

    //     }
    // } catch (error: unknown) {
    //     if (error instanceof Error) {
    //         res.status(500).json({ message: error.message });
    //     } else {
    //         res.status(500).json({ message: "An unknown error occurred" });
    //     }
    // }
};