import {Router} from "express";
import {userRouter} from "./userRouter";
import {productRouter} from "./productRouter";
import  storeRouter from "./storeRouter"
import {adminRouter} from "./adminRouter";
import categoryRouter from "./categoryRouter";

const router = Router();

router.use('/auth', userRouter);
router.use('/auth/admin', adminRouter);
router.use('/products', productRouter);
router.use('/store', storeRouter)
router.use('/categories', categoryRouter);
export default router;
