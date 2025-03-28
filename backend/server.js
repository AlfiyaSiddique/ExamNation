import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import userRouter from "./routes/user.js";
import applicationRouter from "./routes/application.js";
import subjectRouter from "./routes/subjects.js";
dotenv.config();

const app = express();

mongoose.connect(process.env.DB_URL)
.then(() => console.log("MongoDB Connected!"))
.catch(err => console.error("Connection error:", err));

app.use(cors({
    origin: process.env.FRONTENDURL,
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
}));

app.use(express.json())


app.get("/", (req,res)=>{
  res.status(200).json({success: "True", message: "Server is alive"})
})

app.use("/user", userRouter)
app.use("/application", applicationRouter)
app.use("/subject", subjectRouter)


app.listen(process.env.PORT, () => {
  try {
    console.log("Server is running at port " + process.env.PORT);
  } catch (error) {
    console.error(error);
  }
});
