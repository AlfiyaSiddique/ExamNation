import { Router } from "express";
import { getRegularSubjects } from "../controllers/subject";

const subjectRouter = Router()

subjectRouter.post("/regular", getRegularSubjects)

export default subjectRouter
