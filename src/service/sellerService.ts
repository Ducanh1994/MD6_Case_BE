import {AppDataSource} from "../data-source";
import {Product} from "../entity/product";
import {Image} from "../entity/image";
import {Store} from "../entity/store"

class SellerService {
    private productRepository;
    private imageRepository;
    private storeRepository;

    constructor() {
        this.productRepository = AppDataSource.getRepository(Product);
        this.imageRepository = AppDataSource.getRepository(Image);
        this.storeRepository = AppDataSource.getRepository(Store);
    }

    findStore = async (userID) => {
        let foundStore = await this.storeRepository.find({
            where: {
                id: userID
            }
        })
        return foundStore;
    }

    addImage = async (productId, images) => {
        for await (const image of images) {
            try {
                await this.imageRepository.save({product: productId, url: image});
            } catch (error) {
                console.log(error)
            }
        }
    }

    createProduct = async (product) => {
        let item = await this.productRepository.save(product);
        return item;
    }
}

export default new SellerService();