import ItemModel from "../models/Item";
import { Car } from '../interfaces/car.interface';

/*************************************************************************/
export const createCar = async(car:Car) =>{
  const responseInsert = await ItemModel.create(car)
  return responseInsert
};
/*************************************************************************/
export const getCars = async() =>{
  const responseItems = await ItemModel.find({})
  return responseItems
}
/*************************************************************************/
export const getCarId = async(id:string) =>{
  const responseItems = await ItemModel.findById(id)
  return responseItems
}
/*************************************************************************/
export const updateCar = async(id:string, data:Car) =>{
  const responseItem = await ItemModel.findByIdAndUpdate(
    {_id:id},
    data,
    {new:true}
  )
  return responseItem
}
/*************************************************************************/
export const deleteCar = async(id:string) =>{
  const responseItem = await ItemModel.findByIdAndDelete(id)
  return responseItem
}
