import {Router} from "express";
import storeController from "../controller/storeController";

export const storeRouter = Router();
storeRouter.get('/storeDetail', storeController.getStoreInformation);
storeRouter.get('/storeType', storeController.getStoreType);
storeRouter.post('/create', storeController.createStore);
storeRouter.put('/edit/', storeController.editStore)
storeRouter.get('/search/ID', storeController.searchStoreWithID);
