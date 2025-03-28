import mongoose, {Schema } from "mongoose";
import { hashPassword } from "../commonfunc.js";

const UserSchema = new Schema({
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
  currentSemester: {type: Number, require: true},
  backlog: {
    type: Map,
    of: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
  }
});

UserSchema.pre("save", async function (next){
   if(!this.isModified("password")) return next();
   this.password = hashPassword(this.password);
   next();
})

const User = mongoose.model("users", UserSchema);
export default User;
