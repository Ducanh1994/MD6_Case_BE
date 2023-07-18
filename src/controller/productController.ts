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
    getAllProduct = async (req:Request,res:Response) => {
            let products = await ProductService.getAllProduct()
            res.status(201).json(products)
    }
    getAllProductByStoreId = async (req:Request,res:Response) => {
            const storeId = req.body.data;
            let products = await ProductService.getAllProductByStoreId(storeId);
            res.status(201).json(products)
    }
    getMainProduct = async (req:Request,res:Response) => {
        let page = req.query.page;
        let page_size = req.query.page_size
            let listProducts = await this.ProductService.getMainProduct(page,page_size)
             res.status(200).json({
                data: listProducts,
                success: true,
                message: "oke"
            })
    }

    searchProductWithID = async (req: Request, res: Response) => {
            let productId = req.params.id;
            let product = await ProductService.searchProductByID(productId);
            let images = await ImageService.getSubImagesByProductId(productId);
            product.images = images
            res.status(202).json(product);
    }

    getProductDetail = async (req: Request, res: Response) => {
            let productID = req.params.id;
            let product = await ProductService.searchProductByID(productID);
            let images = await ImageService.getSubImagesByProductId(productID);
            product.images = images
            res.status(202).json(product);
    }



    searchProductByName = async (req: Request, res: Response) => {
        let name = req.query.name;
        let page = req.query.page;
        let page_size = req.query.page_size
            let data = await ProductService.searchProductByName(page,page_size,name);
            res.status(202).json({
                success:true,
                message: "oke",
                data: data
            });
    }

    searchProductWithCategory = async (req: Request, res: Response) => {
            let categoryID = req.query.categoryID;
            let productsStatus = await ProductService.searchProductByCategoryID(categoryID);
            res.status(202).json(productsStatus)
    }

    searchProductWithPrice = async (req: Request, res: Response) => {
            let min = req.query.min;
            let max = req.query.max;
            let productsStatus = await ProductService.searchProductByPrice(min, max);
            res.status(202).json(productsStatus)
    }
}

export default new ProductController();