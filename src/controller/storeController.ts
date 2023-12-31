import {Request, Response} from "express";
import StoreService from "../service/storeService";
import adminService from "../service/adminService";
import ProductService from "../service/productService";

class StoreController {
    private StoreService;
    private ProductService

    constructor() {
        this.StoreService = StoreService;
        this.ProductService = ProductService;
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
            res.status(201).json(createdShop);
        } catch (error) {
            res.status(500).json(error + ' at createStore in storeController');
        }
    }

    searchStoreWithID = async (req: Request, res: Response) => {
        try {
            let storeID = req.query.storeID;
            let storeList = await this.StoreService.searchStoreByID(storeID);
            res.status(202).json(storeList);
        } catch (error) {
            res.status(500).json(error + ' at searchStoreWithID in storeController');
        }
    }

    editStore = async (req: Request, res: Response) => {
        try {
            let userID = req['decode'].id;
            let storeDetail = req.body;
            let editStatus = await StoreService.editStoreDetail(userID, storeDetail);
            res.status(202).json(editStatus);
        } catch (error) {
            res.status(500).json(error + ' at editStore in storeController');
        }
    }

    shopProduct = async (req:Request,res:Response) => {
        let page = req.query.page;
        let page_size = req.query.page_size
        let idShop = req.query.idStore;
        try {
            if(page && page_size && idShop){
                let data = await this.ProductService.searchProductByIdShop(page,page_size,idShop);
                res.status(200).json({
                    message: "oke",
                    success: true,
                    data: data
                })
            }


        } catch (error) {
            res.status(500).json({
                success :false,
                error : error,
                message: "error at show shopProduct"
            })
        }
    }
    showAllStore = async (req:Request,res:Response) =>{
        try {
            let store = await this.StoreService.showStore()
            res.status(200).json({
                message: "oke",
                success: true,
                data: store
            })

        } catch (error) {
            res.status(500).json({
                success :false,
                error : error,
                message: "error at showAllStore"
            })
        }
    }

    searchStore = async (req: Request, res: Response) => {
        try {
            let storeFound = await this.StoreService.searchStore(req.query.name);
            res.status(202).json(storeFound);
        } catch (error) {
            res.status(500).json(error + ' at searchAccount in adminController');
        }
    }

    searchStoreActive = async (req: Request, res: Response) => {
        try {
            let storeFound = await this.StoreService.searchStoreActive(req.query.name);
            res.status(202).json(storeFound);
        } catch (error) {
            res.status(500).json(error + ' at searchAccount in adminController');
        }
    }
}

export default new StoreController();