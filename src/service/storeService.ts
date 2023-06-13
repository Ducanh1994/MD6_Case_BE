import {Store} from "../enitity/store";
import {AppDataSource} from "../data-source";

class StoreService {
    private storeRepository;

    constructor() {
        this.storeRepository = AppDataSource.getRepository(Store);
    }

    getAllInfo = async () => {
        return await this.storeRepository.find();
    }

}

export default new StoreService();