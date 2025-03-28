import jwt from "jsonwebtoken"

export const authMiddleware = (req,res,next)=>{
    const token = req.header("Authorization")

    if(!token){
        return res.status(401).json({success: false, message: "Access Denied. Not Authorised User"})
    }

    try{
       const decoded = jwt.verify(token.replace("Bearer",""), process.env.JWTSECRET)
       req.user = {id: decoded.id}
       next();
    }catch(error){
        return res.status(403).json({Success: false, message: "Expired Session! Please Login"})
    }
}
