import { Request, Response, Router } from "express";
import *as controller from "../controllers/item.controller"
import { logMiddleware } from "../middleware/log";

const router = Router()

router.get('/', controller.getItems)
router.post('/', controller.createItem)
router.get('/:id', logMiddleware, controller.getItemId)
router.put('/:id', controller.updateItem)
router.delete('/:id', controller.deleteItem)

export {router}