import {Router} from "express";
import {auth} from "../middleware/auth";
import {adminAuth} from "../middleware/adminAuth";
import {staffAuth} from "../middleware/staffAuth";
import {userAuth} from "../middleware/userAuth";
import productController from "../controller/productController";

export const productRouter = Router();

productRouter.use(auth);
productRouter.get('/search/productID', productController.searchProductWithID);
productRouter.get('/search/productName', productController.searchProductWithName);
productRouter.get('/search/productCategory', productController.searchProductWithCategory);
productRouter.get('/search/productPrice', productController.searchProductWithPrice);


