import {Request, Response} from "express";
import SellerService from "../service/sellerService";
import {ServerClosedEvent} from "typeorm";

class SellerController {
    private SellerService;

    constructor() {
        this.SellerService = SellerService;
    }

    createProduct = async (req: Request, res: Response) => {
        // let userID = req['decode'].idUser;
            let userID = 42
            let images = req.body.images;
            delete req.body.images;
            req.body.store = userID
            let item = await SellerService.createProduct(req.body);
            await SellerService.addImage(item.id, images);
            await res.status(201).json('Product created successfully!');
    }
}

export default new SellerController();