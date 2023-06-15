import {Router} from "express";
import {userRouter} from "./userRouter";
import {productRouter} from "./productRouter";
import  storeRouter from "./storeRouter"
import {adminRouter} from "./adminRouter";

const router = Router();

router.use('/auth', userRouter);
// Admin Router is temporary. Please refactor for cleaner code
router.use('/auth/admin', adminRouter);
router.use('/products', productRouter);
router.use('/store', storeRouter)

export default router;
