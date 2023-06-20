import {Product} from "../enitity/product";
import {Category} from "../enitity/category";
import {AppDataSource} from "../data-source";
import {Between, Like} from "typeorm";

class ProductService {
    private productRepository;
    private categoryRepository;

    constructor() {
        this.productRepository = AppDataSource.getRepository(Product)
        this.categoryRepository = AppDataSource.getRepository(Category)
    }

    findProductById = async (id) => {
        return await this.productRepository.findOne({
            where: {id: id},
            relations: {category: true}
        })
    }

    findbyNameProduct = async (search) => {
        const products = await this.productRepository.find({
            where: {
                name: Like(`%${search}%`)
            },
            relations: {category: true}
        })
        if (!products) {
            return "product is not exist"
        }
        return products;
    }

    findbyCategoryId = async (categoryId) => {
        console.log("Find prd by id: ", categoryId)
        const products = await this.productRepository.find({
            where: {
                category: {id: categoryId},
            },
            relations: {
                category: true
            },
        })
        return products;
    }

    findByPrice = async (min, max) => {
        let Min = parseInt(min), Max = parseInt(max);
        let findProduct = await this.productRepository.find({
                where: {
                    price: Between(Min,Max)
                },
            relations: {
                category: true
            },
        })
        return findProduct
    }

    findAllCategory = async () => {
        const categories = await this.categoryRepository.find()
        return categories;
    }
}

export default new ProductService();