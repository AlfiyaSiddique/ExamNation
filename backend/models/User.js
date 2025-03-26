import mongoose, { Schema } from "mongoose";

const User = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  dob: { type: Date, require: true },
  gender: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: Number, require: true },
  password: { type: String, require: true },
  role: { type: String, require: true },
  college: { type: String, require: true },
  rollno: { type: String },
  dept: { type: String },
  image: {
    binData: Buffer,
  },
});

const user = mongoose.model("user", User);
export default user;
