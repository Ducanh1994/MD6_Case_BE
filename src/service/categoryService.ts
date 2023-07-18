import {AppDataSource} from "../data-source";
import {Category} from "../entity/category";
import {Repository} from "typeorm";

class CategoryService {
    private categoryRepository:Repository<Category>;

    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Category);
    }

    getCategoryList = async () => {
            let findCategory = await this.categoryRepository.find();
            if (!findCategory) {
                return 'There is no category';
            } else {
                return findCategory;
            }
    }

    searchCategoryByID = async (categoryID) => {
            let findCategory = await this.categoryRepository.find({
                where: {
                    id: categoryID
                }
            })
            if (!findCategory) {
                return 'There is no category found';
            } else {
                return findCategory;
            }
    }
}

export default new CategoryService();