import {AppDataSource} from "../data-source";
import {Product} from "../entity/product";

class SellerService {
    private productRepository;

    constructor() {
        this.productRepository = AppDataSource.getRepository(Product);
    }

    addProduct = async (product) => {
        let checkStore = await this.productRepository.find({
            relations: true,
            where: {
                store: {
                    id: product.store.id
                },     category: {

                    id: product.category.id
                }
            }
        })


        return await this.productRepository.save()
    }
}