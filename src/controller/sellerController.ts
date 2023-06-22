import {Request, Response} from "express";
import SellerService from "../service/sellerService";
import {ServerClosedEvent} from "typeorm";
import {sellerRouter} from "../router/sellerRouter";
import sellerService from "../service/sellerService";
import adminService from "../service/adminService";

class SellerController {
    private SellerService;

    constructor() {
        this.SellerService = SellerService;
    }

    // enableShop = async (req: Request, res: Response) => {
    //
    // }

    createProduct = async (req: Request, res: Response)=> {
        try {
            const userID = req['decode'].idUser;
            const images = req.body.images;
            delete req.body.images;
            const user = await adminService.searchOneUserByID(userID);
            const storeId = user.store.id;
            req.body.store = storeId;
            const product = await SellerService.createProduct(req.body);
            await SellerService.addImage(product.id, images);
            res.status(201).json('Product created successfully!');
        } catch (error) {
            console.log(error);
            res.status(500).json('Internal server error');
        }
    }


    editProduct = async (req: Request, res: Response) => {
        let productId = req.params.id
        let userID = req['decode'].idUser;
        let images = req.body.images;
        let updateProduct = req.body.updateProduct
        let user = await adminService.searchOneUserByID(userID);
        let storeId = user.store.id;
        req.body.store = storeId
        await SellerService.editProductService(productId, updateProduct);
        await SellerService.editImagesService(productId, images);
        await res.status(201).json('Product created successfully!');
    }

    // findStore = async (req: Request, res: Response) => {
    //     let userID = req.params.id;
    //     let reply = await sellerService.findStoreByID(userID)
    //     await res.status(201).json(reply);
    // }
}

export default new SellerController();