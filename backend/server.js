import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import userRouter from "./routes/user.js";
dotenv.config();

const app = express();
console.log(process.env.FRONTENDURL)
app.use(cors({
    origin: process.env.FRONTENDURL,
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  }));

app.use(express.json())
app.use("/user", userRouter)

app.get("/", (req,res)=>{
    res.status(200).json({success: "True", message: "Server is alive"})
})

app.listen(process.env.PORT, () => {
  try {
    console.log("Server is running at port " + process.env.PORT);
    mongoose.connect(process.env.DB_URL);
    console.log("DB Connection successful");
  } catch (error) {
    console.error(error);
  }
});
