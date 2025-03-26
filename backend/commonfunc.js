import bcrypt from "bcrypt"

export const hashPassword = async (plainTextPassword)=>{
  const saltRounds = 8;
  const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds)
  return hashPassword
}

export const comparePassword = async (plainTextPassword, hashedPassword)=>{
    const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
    return isMatch
}
