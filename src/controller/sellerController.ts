import {Request, Response} from "express";
import SellerService from "../service/sellerService";
import {ServerClosedEvent} from "typeorm";
import {sellerRouter} from "../router/sellerRouter";
import sellerService from "../service/sellerService";

class SellerController {
    private SellerService;

    constructor() {
        this.SellerService = SellerService;
    }

    // enableShop = async (req: Request, res: Response) => {
    //
    // }

    createProduct = async (req: Request, res: Response) => {
        let userID = req['decode'].idUser;
        let images = req.body.images;
        delete req.body.images;
        req.body.store = userID
        let item = await SellerService.createProduct(req.body);
        await SellerService.addImage(item.id, images);
        await res.status(201).json('Product created successfully!');
    }

    // findStore = async (req: Request, res: Response) => {
    //     let userID = req.params.id;
    //     let reply = await sellerService.findStoreByID(userID)
    //     await res.status(201).json(reply);
    // }
}

export default new SellerController();