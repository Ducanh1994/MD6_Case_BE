import {Router} from "express";
import {userRouter} from "./userRouter";
import {productRouter} from "./productRouter";
import {adminRouter} from "./adminRouter";

const router = Router();

router.use('/auth', userRouter);
// Admin Router is temporary. Please refactor for cleaner code
router.use('/auth/admin', adminRouter)
router.use('/products', productRouter);
export default router;