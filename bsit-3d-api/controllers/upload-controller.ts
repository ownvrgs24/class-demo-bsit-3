import { Request, Response } from "express";
import { UploadModel } from "../models/upload-model";

const uploadModel = new UploadModel();

export const uploadFile = async (req: Request, res: Response) => {
    try {
        if (req.file) {
            await uploadModel.uploadFile(req.file, req.body.account_id);
            res.status(200).json({ message: "File uploaded successfully" });
        } else {
            res.status(400).json({ message: "No file uploaded" });
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}