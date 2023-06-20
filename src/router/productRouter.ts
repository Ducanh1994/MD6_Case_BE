import {Router} from "express";
import productController from "../controller/productController";
import {auth} from "../middleware/auth";
import {adminAuth} from "../middleware/adminAuth";
import {userAuth} from "../middleware/userAuth";
import {staffAuth} from "../middleware/staffAuth";

export const productRouter = Router();

productRouter.get('/categories/:id', productController.findByCategoryId);
productRouter.get('/allCategories', productController.findAllCategory);
productRouter.get('/price', productController.findByPrice)
productRouter.get('/name', productController.findByNameProduct)
productRouter.get('/:id', productController.findProductById);
productRouter.use(auth)
