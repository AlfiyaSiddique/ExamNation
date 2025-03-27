import Application from "../models/Application.js";

export const submitExamApplication = async (req, res) => {
    try{
    let exam = await  Application.findOne({student:{ _id:req.user.id }, semester: req.body.semester});
    if(exam) return res.status(400).json({success: false, message: "Already Applied for this Semester"})

    exam = new Application(req.body)
    await exam.save();

    res.status(201).json({message: "Application registered Successfully", success: true, token})
    }catch(error){
      console.log(error)
      res.status(500).json({message: "Server Error", success: false})
    }
};
