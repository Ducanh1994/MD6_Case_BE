import {Router} from "express";
import {userRouter} from "./userRouter";
import {productRouter} from "./productRouter";
import {storeRouter} from "./storeRouter"
import {adminRouter} from "./adminRouter";
import categoryRouter from "./categoryRouter";
import {staffRouter} from "./staffRouter";
import {sellerRouter} from  "./sellerRouter"

const router = Router();

router.use('/user', userRouter);
// Admin Router is temporary. Please refactor for cleaner code
router.use('/admin', adminRouter);
// Staff Router is temporary. Please refactor for cleaner code
router.use('/staff', staffRouter);
router.use('/seller', sellerRouter);
router.use('/products', productRouter);
router.use('/store', storeRouter)
router.use('/categories', categoryRouter);
export default router;
