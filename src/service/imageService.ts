import {AppDataSource} from "../data-source";
import {Image} from "../entity/image";
import {Repository} from "typeorm";

class StaffService {
    private imageRepository:Repository<Image>;

    constructor() {
        this.imageRepository = AppDataSource.getRepository(Image);
    }

    getSubImagesByProductId = async (productId) => {
            const images = await this.imageRepository.find({
                where: {
                    product: productId
                }
            });
            const urls = images.map(image => image.url);
            return urls;
    }
}

export default new StaffService();