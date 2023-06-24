import {Router} from "express";
import {auth} from "../middleware/auth";
import orderController from "../controller/orderController";

export const orderRouter = Router();
orderRouter.use(auth)
orderRouter.get('/', orderController.getOrder)