import ItemModel from "../models/Item";
import { Car } from '../interfaces/car.interface';

/*************************************************************************/
export const getOrders = async() =>{
  const responseItem = await ItemModel.find({})
  return responseItem
};

