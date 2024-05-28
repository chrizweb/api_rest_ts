import { Request, Response } from "express"
import  { handleHttp }  from "../utils/error.handle"

export const getItems = (req:Request, res:Response) =>{
  try {
    
  } catch (e) {
    handleHttp(res, 'ERROR_GET_IBLOG')
  }
}

export const getItemId = (req:Request, res:Response) =>{
  try {
    
  } catch (e) {
    handleHttp(res, 'ERROR_GET_BLOG')
  }
}

export const createItem = (req:Request, res:Response) =>{
  try {
    const {body} = req
    
  } catch (e) {
    handleHttp(res, 'ERROR_POST_BLOG')
  }
}

export const updateItem = (req:Request, res:Response) =>{
  try {
    
  } catch (e) {
    handleHttp(res, 'ERROR_PUT_BLOG')
  }
}

export const deleteItem = (req:Request, res:Response) =>{
  try {
    
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_BLOG')
  }
}


