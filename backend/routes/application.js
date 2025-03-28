import { Router } from "express";
import { authMiddleware } from "../middleware.js";
import { submitExamApplication } from "../controllers/application.js";

const applicationRouter = Router()

applicationRouter.post("/submit", authMiddleware, submitExamApplication)

export default applicationRouter
