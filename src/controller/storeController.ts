import {Request, Response} from "express";
import storeService from "../service/storeService";

class StoreController {
    constructor() {
    }

    findAll = async (req: Request, res: Response) => {
        let storeInfo = await storeService.getAllInfo();
        res.status(200).json(storeInfo)
    }
    addInfo = async (req: Request, res: Response) => {
        let infos = req.body;
        let storeInfo = await storeService.addInfo(infos);
        res.status(200).json(storeInfo)
    }
    findStoreById = async (req: Request, res: Response) => {
        let id = req.params.id;
        let store = await storeService.findStoreById(id);
        res.status(200).json(store)
    }
    editStore = async (req: Request, res: Response) => {
        try {
            console.log(req.params.id, req.body, 11)
            let id = req.params.id;
            let storeInfos = req.body;
            await storeService.editStore(id, storeInfos);
            res.status(200).json({
                message: 'Edit success'
            })
        } catch (e) {
            
        }
    }

}

export default new StoreController();