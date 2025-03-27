import Subject from "../models/Subjects.js";

export const getRegularSubjects = async (req, res) => {
    try{
    let subjects = await  Subject.find({semester: req.body.semester});
    res.status(201).json({message: "Subjects fetched Successfully", success: true, subjects})
    }catch(error){
      console.log(error)
      res.status(500).json({message: "Server Error", success: false})
    }
};
