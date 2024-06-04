import { Request, Response } from "express"
import  { handleHttp }  from "../utils/error.handle"
import { JwtPayload } from "jsonwebtoken"

interface RequestExt extends Request{
  user?:string | JwtPayload
}

/*************************************************************************/
export const getItems = (req:RequestExt, res:Response) =>{
  try {
    res.send({
      data:'Esto solo lo ven las personas con sesion / jwt!!!',
      user: req.user
    })
    
    
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}




