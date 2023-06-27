import {AppDataSource} from "../data-source";
import {Product} from "../entity/product";
import {Between, Like} from "typeorm";
import {productRouter} from "../router/productRouter";

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
    searchProductByIdShop = async (page,page_size,idShop) => {
        let start = (page -1) * page_size;
        let end = start + parseInt(page_size)
        const products =  await this.ProductRepository.find({
            where: {
                store: {id:idShop}
            }
        })
        let total = (products.length + 1)
        let newProducts = products.slice(start,end)
        return {
            total,newProducts
        }

    }


    updateProductQuantityService = async (productId, quantity) => {
        try {
            await this.ProductRepository.update({id:productId}, {quantity: quantity})
        } catch (error) {
            console.log(error + 'at update product quantity');
        }
    }

    getOneProductById = async (productId) => {
        try {
        let product = await this.ProductRepository.findOne({
                where: {
                    id: productId
                }
            })
            return product;
        } catch (error) {
            console.log(error + 'at find one product by id');
        }
    }
}

export default new ProductService();