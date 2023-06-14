import {Router} from "express";
import {userRouter} from "./userRouter";
import {productRouter} from "./productRouter";

const router = Router();

router.use('/auth', userRouter);
router.use('/products', productRouter);
export default router;