import {Router} from "express";
import {auth} from "../middleware/auth";
import {userAuth} from "../middleware/userAuth";
import SellerController from "../controller/sellerController";

export const sellerRouter = Router();

sellerRouter.use(auth);
sellerRouter.use(userAuth);
sellerRouter.post('/createProduct', SellerController.createProduct);
