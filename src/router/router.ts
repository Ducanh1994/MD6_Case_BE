import {Router} from "express";
import {userRouter} from "./userRouter";
import {productRouter} from "./productRouter";
import  storeRouter from "./storeRouter"
import {adminRouter} from "./adminRouter";
import categoryRouter from "./categoryRouter";
import {staffRouter} from "./staffRouter";
import {sellerRouter} from  "./sellerRouter"

const router = Router();

router.use('/auth', userRouter);
router.use('/auth/admin', adminRouter);
// Admin Router is temporary. Please refactor for cleaner code
router.use('/auth/admin', adminRouter);
// Staff Router is temporary. Please refactor for cleaner code
router.use('/auth/staff', staffRouter);
router.use('/auth/seller', sellerRouter);
router.use('/products', productRouter);
router.use('/store', storeRouter)
router.use('/categories', categoryRouter);
export default router;
