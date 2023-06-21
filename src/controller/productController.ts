import {Request, Response} from "express";
import ProductService from "../service/productService";
import ImageService from "../service/imageService";

class ProductController {
    private ProductService
    private ImageService


    constructor() {
        this.ProductService = ProductService;
        this.ImageService = ImageService
    }

    searchProductWithID = async (req: Request, res: Response) => {
        try {
            let productID = req.params.id;
            console.log(productID, 11111)
            let product = await ProductService.searchProductByID(productID);
            let images = await ImageService.getSubImagesByProductId(productID);
            product.images = images
            await res.status(202).json(product);
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