import { Request, Response, Router } from "express";
import *as controller from "../controllers/item.controller"

const router = Router()

router.get('/', controller.getItems)
router.post('/', controller.createItem)
router.get('/:id', controller.getItemId)
router.put('/:id', controller.updateItem)
router.delete('/:id', controller.deleteItem)

export {router}