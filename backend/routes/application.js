import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import { submitExamApplication } from "../controllers/application";

const applicationRouter = Router()

applicationRouter.post("/submit", authMiddleware, submitExamApplication)

export default applicationRouter
