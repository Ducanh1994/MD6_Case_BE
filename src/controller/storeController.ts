import {Request, Response} from "express";
import StoreService from "../service/storeService";
import {storeRouter} from "../router/storeRouter";
import adminService from "../service/adminService";

class StoreController {
    private StoreService;

    constructor() {
        this.StoreService = StoreService;
    }

    getStoreInformation = async (req: Request, res: Response) => {
        try {
            let userID = req['decode'].idUser;
            let storeInfo = await this.StoreService.showStoreInformation(userID);
            res.status(202).json(storeInfo);
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
            console.log(1)
        try {
            let userID = req['decode'].idUser;
            console.log(userID)
            // let userID = 8
            let user = await adminService.searchOneUserByID(userID)
            let storeDetail = req.body;
            storeDetail.user = user
            let createStatus = await this.StoreService.createStoreDetail(storeDetail);
            await res.status(201).json(createStatus);
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
            let userID = req['decode'].idUser;
            let storeDetail = req.body;
            let editStatus = await StoreService.editStoreDetail(userID, storeDetail);
            await res.status(202).json(editStatus);
        } catch (error) {
            await res.status(500).json(error + ' at editStore in storeController');
        }
    }

}

export default new StoreController();