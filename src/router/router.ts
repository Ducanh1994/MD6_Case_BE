import {Router} from "express";
import  storeRouter from "./storeRouter"

const router = Router();
router.use('/store', storeRouter)

export default router;
