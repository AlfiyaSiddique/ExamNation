import { comparePassword } from "../commonfunc.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try{
    let user = await  User.findOne({email: req.body.email});
    if(user) return res.status(400).json({success: false, message: "User already exist"})

  const userData = { ...req.body };

  if (req.file) {
      userData.image = {
          binData: req.file.buffer
      };
  }

  user = new User(userData);
  await user.save();

    const token = jwt.sign({id: user._id}, process.env.JWTSECRET, {expiresIn: process.env.JWTEXPIRY})
    res.status(201).json({message: "User registered Successfully", success: true, token})
    }catch(error){
      console.log(error)
      res.status(500).json({message: "Server Error", success: false})
    }
};

export const login = async (req,res)=>{
    try{
        let user = await User.findOne({email: req.body.email, role: req.body.role});
        if(!user) return res.status(400).json({success: false, message: "User not found"})
    
        if(comparePassword(req.body.password, user.password)){
            const token = jwt.sign({id: user._id}, process.env.JWTSECRET, {expiresIn: process.env.JWTEXPIRY})
            res.status(201).json({message: "Login Successful", success: true, token})
        }else{
            res.status(400).json({message: "Incorrect mail or password or role", success: false})
        }
        }catch(error){
          console.log(error)
          res.status(500).json({message: "Server Error", success: false})
        }
};




