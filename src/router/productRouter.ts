import {Router} from "express";
import {auth} from "../middleware/auth";
import {adminAuth} from "../middleware/adminAuth";
import {userAuth} from "../middleware/userAuth";
import {staffAuth} from "../middleware/staffAuth";
import productController from "../controller/productController";

export const productRouter = Router();

productRouter.get('/categories/:id', productController.findByCategoryId);
productRouter.get('/price', productController.findByPrice);
productRouter.get('/name', productController.findByNameProduct);
productRouter.get('/:id', productController.findProductById);
productRouter.use(auth);
productRouter.use(adminAuth);
productRouter.use(staffAuth);
productRouter.use(userAuth);
