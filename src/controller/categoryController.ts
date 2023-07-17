import {Request, Response} from "express";
import categoryService from "../service/categoryService";


class CategoryController{
    private categoryService;
    constructor() {
        this.categoryService = categoryService
    }

    getCategory = async (req: Request, res: Response) => {
            let categoryList = await this.categoryService.getCategoryList();
            res.status(202).json(categoryList);
    }

    searchCategoryWithID = async (req: Request, res: Response) => {
            let categoryID = req.query.categoryID;
            let categoryStatus = await this.categoryService.searchCategoryByID(categoryID);
            res.status(202).json(categoryStatus);
    }

}
export default new CategoryController()