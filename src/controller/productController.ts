import {Request, Response} from "express";
import ProductService from "../service/productService";

class ProductController {
    private ProductService

    constructor() {
        this.ProductService = ProductService;
    }

    searchProductWithID = async (req: Request, res: Response) => {
        try {
            let productID = req.query.productID;
            let productsStatus = await ProductService.searchProductByID(productID);
            await res.status(202).json(productsStatus);
        } catch (error) {
            await res.status(500).json(error + ' at searchProductWithID in productController');
        }
    }

    searchProductWithName = async (req: Request, res: Response) => {
        try {
            let productName = req.query.productName;
            let productsStatus = await ProductService.searchProductByName(productName);
            await res.status(202).json(productsStatus);
        } catch (error) {
            await res.status(500).json(error + ' at searchProductWithName in productController');
        }
    }

    searchProductWithCategory = async (req: Request, res: Response) => {
        try {
            let categoryID = req.query.categoryID;
            let productsStatus = await ProductService.searchProductByCategoryID(categoryID);
            await res.status(202).json(productsStatus)
        } catch (error) {
            await res.status(500).json(error + ' at searchProductWithCategory in productController');
        }
    }

    searchProductWithPrice = async (req: Request, res: Response) => {
        try {
            let min = req.query.min;
            let max = req.query.max;
            let productsStatus = await ProductService.searchProductByPrice(min, max);
            await res.status(202).json(productsStatus)
        } catch (error) {
            await res.status(500).json(error + ' at searchProductWithPrice in productController');
        }
    }
}

export default new ProductController();