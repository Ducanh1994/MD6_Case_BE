import {Router} from "express";
import {userRouter} from "./userRouter";
import {productRouter} from "./productRouter";
import {storeRouter} from "./storeRouter"
import {adminRouter} from "./adminRouter";
import categoryRouter from "./categoryRouter";
import {staffRouter} from "./staffRouter";
import {sellerRouter} from  "./sellerRouter"
import {loggedInRouter} from "./logeddInRouter";
import {orderRouter} from "./orderRouter";

const router = Router();

router.use('/', userRouter);
router.use('/admin', adminRouter);
router.use('/staff', staffRouter);
router.use('/seller', sellerRouter);
router.use('/products', productRouter);
router.use('/store', storeRouter);
router.use('/categories', categoryRouter);
router.use('/account', loggedInRouter);
router.use('/order', orderRouter)




export default router;
