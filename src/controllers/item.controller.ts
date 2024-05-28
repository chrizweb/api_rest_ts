import { Request, Response } from "express"
import  { handleHttp }  from "../utils/error.handle"
import { createCar, getCars, getCarId, updateCar, deleteCar } from "../services/item.service"

/*************************************************************************/
export const getItems = async(req:Request, res:Response) =>{
  try {
    const response = await getCars()
    res.send(response)
    
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}
/*************************************************************************/
export const getItemId = async(req:Request, res:Response) =>{
  try {
    const response = await getCarId(req.params.id)
    const data = response ? response : 'ITEM_NOT_FOUND'
    res.send(data)
    
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEM')
  }
}
/*************************************************************************/
export const createItem = async(req:Request, res:Response) =>{
  try {
    const responseItem = await createCar(req.body)
    res.send(responseItem)
    
  } catch (e) {
    handleHttp(res, 'ERROR_POST_ITEM', e)
  }
}
/*************************************************************************/
export const updateItem = async(req:Request, res:Response) =>{
  try {
    const {id} = req.params
    const {body} = req

    const response = await updateCar(id, body)
    res.send(response)
    
  } catch (e) {
    handleHttp(res, 'ERROR_PUT_ITEM')
  }
}
/*************************************************************************/
export const deleteItem = async(req:Request, res:Response) =>{
  try {
    const response = await deleteCar(req.params.id)
    const data = response ? response : 'ITEM_NOT_FOUND'
    res.send(data)
    
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_ITEM')
  }
}


