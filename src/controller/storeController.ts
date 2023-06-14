import {Request, Response} from "express";
import storeService from "../service/storeService";

class StoreController {
    constructor() {}

    findAll = async (req: Request, res: Response) => {
        let storeInfo = await storeService.getAllInfo();
        res.status(200).json(storeInfo)
    }
    addInfo = async (req: Request, res: Response) => {
        let infos = req.body
        let storeInfo = await storeService.addInfo(infos);
        res.status(200).json(storeInfo)
    }

}

export default new StoreController();