import mongoose, { Schema } from "mongoose";
import user from "./User";

const Application = new Schema({
    student: {
        type: mongoose.ObjectId,
        ref: user
    },
    type:{type:  String, require: true},
    semester: {type:  Number, require: true},
    subjects: {type: [String], require: true},
    gender: {type: String, require: true},
    email: {type: String, require: true},
    phone: {type: Number, require: true},
    password: {type: String, require: true},
    role: {type: String, require: true},
    college: {type: String, require: true},
    rollno: {type: String},
    dept: {type: String},
})

const user = mongoose.model("user", User)
export default user;
