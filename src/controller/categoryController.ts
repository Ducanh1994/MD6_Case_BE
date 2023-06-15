import {Request, Response} from "express";
import categoryService from "../service/categoryService";


class CategoryController{
    private categoryService;
    constructor() {
        this.categoryService = categoryService
    }

    findAll = async (req: Request, res: Response) => {
        let listCategory = await this.categoryService.getAllCategory();
        console.log(listCategory)
        res.status(200).json(listCategory)
    }

    findById = async (req: Request, res: Response) => {
        let categoryId = req.params.id
        let category = await this.categoryService.getById(categoryId);
        res.status(200).json(category)
    }

}
export default new CategoryController()