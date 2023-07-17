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
            let userID = req['decode'].id;
            const user = await adminService.searchOneUserByID(userID)
            const shopId = user.store.id;
            const shop = await this.StoreService.findOwnStore(shopId)
            res.status(200).json(shop);
    }

    updateStoreInformation = async (req: Request, res: Response) => {
            let updateShop = req.body
            let userID = req['decode'].id;
            let user = await adminService.searchOneUserByID(userID);
            let shopId = user.store.id;
            await this.StoreService.updateStoreInformationService(shopId, updateShop)
            res.status(202).json('Update success');
    }

    getStoreType = async (req: Request, res: Response) => {
            let storeType = await this.StoreService.showStoreType();
            res.status(202).json(storeType);
    }

        createStore = async (req: Request, res: Response) => {
            let userID = req['decode'].id;
            let user = await adminService.searchOneUserByID(userID)
            let storeDetail = req.body;
            storeDetail.user = user
            let createdShop = await this.StoreService.createStoreDetail(storeDetail);
            res.status(201).json(createdShop);
    }

    searchStoreWithID = async (req: Request, res: Response) => {
            let storeID = req.query.storeID;
            let storeList = await this.StoreService.searchStoreByID(storeID);
            res.status(202).json(storeList);
    }

    editStore = async (req: Request, res: Response) => {
            let userID = req['decode'].id;
            let storeDetail = req.body;
            let editStatus = await StoreService.editStoreDetail(userID, storeDetail);
            res.status(202).json(editStatus);
    }

    shopProduct = async (req:Request,res:Response) => {
        let page = req.query.page;
        let page_size = req.query.page_size
        let idShop = req.query.idStore;
            if(page && page_size && idShop){
                let data = await this.ProductService.searchProductByIdShop(page,page_size,idShop);
                res.status(200).json({
                    message: "oke",
                    success: true,
                    data: data
                })
            }
    }
    showAllStore = async (req:Request,res:Response) =>{
            let store = await this.StoreService.showStore()
            res.status(200).json({
                message: "oke",
                success: true,
                data: store
            })
    }

    searchStore = async (req: Request, res: Response) => {
            let storeFound = await this.StoreService.searchStore(req.query.name);
            res.status(202).json(storeFound);
    }

    searchStoreActive = async (req: Request, res: Response) => {
            let storeFound = await this.StoreService.searchStoreActive(req.query.name);
            res.status(202).json(storeFound);
    }
}

export default new StoreController();