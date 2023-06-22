import {AppDataSource} from "../data-source";
import {Product} from "../entity/product";
import {Image} from "../entity/image";
import {Store} from "../entity/store"
import StoreService from "./productService";

class SellerService {
    private ProductRepository;
    private ImageRepository;
    private StoreRepository;
    private StoreService;

    constructor() {
        this.ProductRepository = AppDataSource.getRepository(Product);
        this.ImageRepository = AppDataSource.getRepository(Image);
        this.StoreRepository = AppDataSource.getRepository(Store);
        this.StoreService = StoreService;
    }

    // Used for main seller page
    // findStoreByID = async (userID) => {
    //     try {
    //         const storeID = await this.StoreRepository.find({
    //             relations: true,
    //             where: {
    //                 user: {
    //                     id: userID
    //                 }
    //             }
    //         })
    //         if (!storeID) {
    //             return t
    //         }
    //     }
    // }

    showAllStoreInformation = async (storeID) => {
        const storeInformation = await this.StoreService.showStoreInformation(storeID);
        return storeInformation;
    }

    updateStoreInformation = async (storeID) => {

    }
    //
    // findStore = async (userID) => {
    //     let foundStore = await this.storeRepository.find({
    //         where: {
    //             id: userID
    //         }
    //     })
    //     return foundStore;
    // }

    addImage = async (productId, images) => {
        for await (const image of images) {
            try {
                await this.ImageRepository.save({product: productId, url: image});
            } catch (error) {
                console.log(error)
            }
        }
    }

    createProduct = async (product) => {
        let item = await this.ProductRepository.save(product);
        return item;
    }

    editProductService = async (productId, updateProduct) => {
        try {
            await this.ProductRepository.update({id: productId}, updateProduct);
        } catch (error) {
            console.error(error);
            throw new Error('Error while updating product');
        }
    }

    editImagesService = async (productId, images) => {
        try {
            await this.ImageRepository.delete({ product: { id: productId } });
            await this.addImage(productId, images)
        } catch (error) {
            console.error(error);
            throw new Error('Error while updating images for product');
        }
    }


}

export default new SellerService();