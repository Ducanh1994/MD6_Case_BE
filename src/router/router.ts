import {Router} from "express";
import {userRouter} from "./userRouter";
import {productRouter} from "./productRouter";
import  storeRouter from "./storeRouter"
const router = Router();

router.use('/auth', userRouter);
router.use('/products', productRouter);
router.use('/store', storeRouter)

export default router;
