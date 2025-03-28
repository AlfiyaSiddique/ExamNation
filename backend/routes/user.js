import { Router } from "express";
import { login, register } from "../controllers/user.js";
import { uploadFile } from "../middleware.js";

const userRouter = Router()

userRouter.post("/register", uploadFile.single('image'), register)
userRouter.post("/login", login)

export default userRouter
