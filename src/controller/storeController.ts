import {Request, Response} from "express";
import StoreService from "../service/storeService";
import adminService from "../service/adminService";

class StoreController {
    private StoreService;

    constructor() {
        this.StoreService = StoreService;
    }

    getStoreInformation = async (req: Request, res: Response) => {
        try {
            let userID = req['decode'].id;
            const user = await adminService.searchOneUserByID(userID)
            const shopId = user.store.id;
            const shop = await this.StoreService.findOwnStore(shopId)
            res.status(200).json(shop);
        } catch (error) {
            res.status(500).json(error + ' at getStoreInformation in storeController');
        }
    }






    updateStoreInformation = async (req: Request, res: Response) => {
        try {
            let updateShop = req.body
            let userID = req['decode'].id;
            let user = await adminService.searchOneUserByID(userID);
            let shopId = user.store.id;
            await this.StoreService.updateStoreInformationService(shopId, updateShop)
            res.status(202).json('Update success');
        } catch (error) {
            res.status(500).json(error + ' at getStoreInformation in storeController');
        }
    }





    getStoreType = async (req: Request, res: Response) => {
        try {
            let storeType = await this.StoreService.showStoreType();
            res.status(202).json(storeType);
        } catch (error) {
            res.status(500).json(error + ' at getStoreInformation in storeController');
        }
    }

        createStore = async (req: Request, res: Response) => {
        try {
            let userID = req['decode'].id;
            let user = await adminService.searchOneUserByID(userID)
            let storeDetail = req.body;
            storeDetail.user = user
            let createdShop = await this.StoreService.createStoreDetail(storeDetail);
            await res.status(201).json(createdShop);
        } catch (error) {
            await res.status(500).json(error + ' at createStore in storeController');
        }
    }

    searchStoreWithID = async (req: Request, res: Response) => {
        try {
            let storeID = req.query.storeID;
            let storeList = await this.StoreService.searchStoreByID(storeID);
            await res.status(202).json(storeList);
        } catch (error) {
            await res.status(500).json(error + ' at searchStoreWithID in storeController');
        }
    }

    editStore = async (req: Request, res: Response) => {
        try {
            let userID = req['decode'].id;
            let storeDetail = req.body;
            let editStatus = await StoreService.editStoreDetail(userID, storeDetail);
            await res.status(202).json(editStatus);
        } catch (error) {
            await res.status(500).json(error + ' at editStore in storeController');
        }
    }

}

export default new StoreController();