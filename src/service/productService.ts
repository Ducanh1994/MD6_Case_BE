import {AppDataSource} from "../data-source";
import {Product} from "../entity/product";
import {Between, Like} from "typeorm";

class ProductService {
    private ProductRepository;

    constructor() {
        this.ProductRepository = AppDataSource.getRepository(Product);
    }

    getAllProduct = async () => {
        try {
            return await this.ProductRepository.find({
                relations: {
                    category:true
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    searchProductByID = async (productID) => {
        try {
            const findProduct = await this.ProductRepository.findOne({
                relations:{
                    category: true
                },
                where: {
                    id: productID
                },
            })
            if (!findProduct) {
                return 'There is no product found';
            } else {
                return findProduct;
            }
        } catch (error) {
            console.log(error + ' at searchProductByID in productService');
        }
    }

    searchProductByName = async (keyword) => {
            return await this.ProductRepository.find({
                relations: {
                    category: true
                },
                where: {
                    name: Like(`${keyword}%`)
                }
            })
    }

    searchProductByCategoryID = async (categoryID) => {
        try {
            const findProducts = await this.ProductRepository.find({
                relations: true,
                where: {
                    category: {
                        id: categoryID
                    }
                }
            })
            if (!findProducts) {
                return 'There is no product found';
            } else {
                return findProducts;
            }
        } catch (error) {
            console.log(error + ' at searchProductByCategoryID in productService');
        }
    }

    searchProductByPrice = async (min, max) => {
        try {
            let Min = parseInt(min), Max = parseInt(max);
            let findProducts = await this.ProductRepository.find({
                where: {
                    price: Between(Min, Max)
                }
            })
            if (!findProducts) {
                return 'There is no product found';
            }
            return findProducts;
        } catch (error) {
            console.log(error + ' at searchProductByPrice in productService');
        }
    }
}

export default new ProductService();