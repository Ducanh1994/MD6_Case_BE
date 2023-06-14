import {Product} from "../enitity/product";
import {AppDataSource} from "../data-source";
import {Between, Like} from "typeorm";

class ProductService {
    private productRepository;

    constructor() {
        this.productRepository = AppDataSource.getRepository(Product)
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
            }
        })
        if (!products) {
            return "product is not exist"
        }
        return products;
    }

    findbyCategoryId = async (categoryId) => {
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
                }
        })
        return findProduct
    }
}

export default new ProductService();