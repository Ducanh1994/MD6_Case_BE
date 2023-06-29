import {Router} from "express";
import {auth} from "../middleware/auth";
import orderDetailController from "../controller/orderDetailController";

export const orderDetailRouter = Router();
orderDetailRouter.use(auth);
orderDetailRouter.get('/',orderDetailController.getOrderDetails);
orderDetailRouter.get('/invoice',orderDetailController.getOrderDetailStatusTrue);
orderDetailRouter.get('/pending',orderDetailController.getOrderDetailPending);



