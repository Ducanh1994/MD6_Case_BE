import {Request, Response} from "express";
import productService from "../service/productService";
import * as process from "process";
import {Product} from "../enitity/product";

class ProductController {
    constructor() {
    }

    findProductById = async (req: Request, res: Response) => {
        let id = req.params.id;
        let product = await productService.findProductById(id);
        res.status(200).json(product)
    }

    findByNameProduct = async (req: Request, res: Response) => {
        try {
            let search = req.query.search;
            let response = await productService.findbyNameProduct(search);
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    findByCategoryId = async (req: Request, res: Response) => {
        try {
            let categoryId = req.params.id;
            console.log(req.params.id)
            let products = await productService.findbyCategoryId(categoryId);
            res.status(200).json(products)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    findByPrice = async (req: Request, res: Response) => {
        try {
            let min = req.query.min;
            let max = req.query.max;
            let response = await productService.findByPrice(min, max);
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    findAllCategory = async (req: Request, res: Response) => {
        try {
            let categories = await productService.findAllCategory();
            res.status(200).json(categories)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
}

export default new ProductController();