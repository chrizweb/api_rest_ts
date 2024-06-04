import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request{
  user?:string | JwtPayload
}

export const checkJwt = (req:RequestExt, res:Response, next:NextFunction) =>{
  try {
    const jwtUser = req.headers.authorization || ''
    const jwt = jwtUser.split(' ').pop()
      
    const isUser = verifyToken(`${jwt}`)
  
    if(!isUser){
      res.status(401)
      res.send('INVALID_JWT')
    }else{
      req.user = isUser
      console.log({jwtUser})
      next()
    }
    
  } catch (e) {
    console.log({e})
    res.status(400)
    res.send('INVALID_SESSION')
  }
}