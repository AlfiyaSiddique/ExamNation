import mongoose, { Schema, STATES } from "mongoose";
import user from "./User";

const Status = ["PENDING", "SUCCESS", "FAIL"]

const Application = new Schema({
    student: {
        type: mongoose.ObjectId,
        ref: user
    },
    type:{type:  String, require: true},
    semester: {type:  Number, require: true},
    subjects: {type: [String], require: true},
    paymentMethod: {type: String, require: true},
    paymentDetails: {type: Object, require: true},
    transactionStatus: {type: String, enum: Status},
})

const application = mongoose.model("application", Application)
export default application;
