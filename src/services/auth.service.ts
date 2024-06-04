import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/User"
import { encrypt, verifide } from "../utils/bcrypt.handle"
import { generateToken } from "../utils/jwt.handle"

export const registerUser = async({email, password, name}:User) =>{
  const checkUser = await UserModel.findOne({email})
  if(checkUser) return "USER_EXISTS"

  const passHash = await encrypt(password)

  const newUser = await UserModel.create({email, password:passHash, name})
  return newUser
}
/*************************************************************************/
export const  loginUser = async({email, password}:Auth) =>{
  const checkUser = await UserModel.findOne({email})
  if(!checkUser) return "NOT_FOUND_USER" 

  const passwordHash = checkUser.password
  const isCorrect = await verifide(password, passwordHash)

  if(!isCorrect) return "PASSWORD_INCORRECT"
  
  /*Generar token de usuario*/
  const token = generateToken(checkUser.email)
  const data = {
    token,
    user:checkUser
  }
  return data
}