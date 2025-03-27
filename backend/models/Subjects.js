import mongoose, { Schema, STATES } from "mongoose";


const subjectSchema = new Schema({
    code:{type:  String, require: true},
    name: {type:  String, require: true},
    semester: {type: Number, require: true}
})

const Subject = mongoose.model("subjects", subjectSchema)
export default Subject;
