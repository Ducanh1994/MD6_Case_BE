import {Request, Response} from "express";
import SellerService from "../service/sellerService";
import {ServerClosedEvent} from "typeorm";

class SellerController {
    private SellerService;

    constructor() {
        this.SellerService = SellerService;
    }

    createProduct = async (req: Request, res: Response) => {
        let userID = req['decode'].idUser;
        let storeID = await SellerService.findStore(userID);
        console.log(storeID)
        if (storeID.length !== 0) {
            let images = req.body.images;
            delete req.body.images;
            let item = await SellerService.createProduct(req.body);
            await SellerService.addImage(item.id, images);
            await res.status(201).json('Product created successfully!');
        } else {
            await res.status(404).json('Store not found!');
        }
    }
}

export default new SellerController();