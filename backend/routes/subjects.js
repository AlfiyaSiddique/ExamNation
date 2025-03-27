import { Router } from "express";
import { getRegularSubjects } from "../controllers/subject.js";

const subjectRouter = Router()

subjectRouter.post("/regular", getRegularSubjects)

export default subjectRouter
