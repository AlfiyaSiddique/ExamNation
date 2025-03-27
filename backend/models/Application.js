import mongoose, { Schema, STATES } from "mongoose";

const Status = ["PENDING", "SUCCESS", "FAIL"]

const ApplicationSchema = new Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    type:{type:  String, require: true},
    semester: {type:  Number, require: true},
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
      },],
    paymentMethod: {type: String, require: true},
    paymentDetails: {type: Object, require: true},
    transactionStatus: {type: String, enum: Status, default: Status[0]},
    isVerified: {type: Boolean, require: true, default: false}
})

const Application = mongoose.model("applications", ApplicationSchema)
export default Application;
