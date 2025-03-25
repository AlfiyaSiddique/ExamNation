import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors())

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
