import {Router} from "express";
import storeController from "../controller/storeController";


const storeRouter = Router();
storeRouter.get('/', storeController.findAll)
storeRouter.post('/', storeController.addInfo)
storeRouter.get('/:id', storeController.findStoreById)
storeRouter.put('/:id', storeController.editStore)

export default storeRouter;