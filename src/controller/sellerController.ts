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

    createProduct = async (req: Request, res: Response)=> {
            const userID = req['decode'].id;
            const images = req.body.images;
            delete req.body.images;
            const user = await adminService.searchOneUserByID(userID);
            const storeId = user.store.id;
            req.body.store = storeId;
            const product = await SellerService.createProduct(req.body);
            await SellerService.addImage(product.id, images);
            res.status(201).json('Product created successfully!');
    }
    searchProduct = async (req: Request, res: Response)=> {
          const name = req.query.name;
          const storeId = req.query.storeId;
          const products = await sellerService.searchProduct(name,storeId);
          res.status(200).json(products)
    }


    editProduct = async (req: Request, res: Response) => {
            let productId = req.params.id;
            let userID = req["decode"].id;
            let listImages = req.body.images;
            let updateProduct = req.body.updateProduct;
            let user = await adminService.searchOneUserByID(userID);
            let storeId = user.store.id;
            req.body.store = storeId;
            await SellerService.editProductService(productId, updateProduct);
            await SellerService.editImagesService(productId, listImages);
            res.status(201).json("Product created successfully!");
    }
}

export default new SellerController();