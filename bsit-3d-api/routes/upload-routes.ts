import { Router } from "express";
import multer from "multer";
import { uploadFile } from "../controllers/upload-controller";
const uploadRouter = Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
export const upload = multer({ storage: storage });
uploadRouter.post("/upload", upload.single("file"), uploadFile);
export default uploadRouter;
