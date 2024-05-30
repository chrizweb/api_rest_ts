import { Request, Response } from "express"
import { registerUser, loginUser } from "../services/auth.service";

export const register = async(req:Request, res:Response) =>{
  
  const responseUser = await registerUser(req.body)
  res.send(responseUser)
}
/*************************************************************************/
export const login = async(req:Request, res:Response) =>{
  const {email, password} = req.body

  const responseUser = await loginUser({email, password})

  if(responseUser === "PASSWORD_INCORRECT"){
    res.status(403)
    res.send(responseUser)
  }else{
    res.send(responseUser)
  }

}