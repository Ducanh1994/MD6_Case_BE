import {Router} from "express";
import storeController from "../controller/storeController";


const storeRouter = Router();
storeRouter.get('/', storeController.findAll)




export default storeRouter;