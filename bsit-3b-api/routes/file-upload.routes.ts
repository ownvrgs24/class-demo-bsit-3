import { Router } from "express";
import { uploadFile } from "../controllers/file-upload-controller";
import multer from "multer";

const fileUploadRouter = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

fileUploadRouter.post("/file-upload", upload.single("file"), uploadFile);

export default fileUploadRouter;