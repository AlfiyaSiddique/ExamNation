import jwt from "jsonwebtoken";
import multer from "multer";

export const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Access Denied. Not Authorised User" });
  }

  try {
    const decoded = jwt.verify(
      token.replace("Bearer ", ""),
      process.env.JWTSECRET
    );
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    return res
      .status(403)
      .json({ Success: false, message: "Expired Session! Please Login" });
  }
};

export const uploadFile = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5*1024*1024
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
}
})
