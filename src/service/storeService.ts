import {Store} from "../enitity/store";
import {AppDataSource} from "../data-source";

class StoreService {
    private storeRepository;

    constructor() {
        this.storeRepository = AppDataSource.getRepository(Store);
    }

    getAllInfo = async () => {
        const infos = await this.storeRepository.find({
            relations: {
                storeType:true
            },
        });
        return infos;
    }
    addInfo = async (infos) => {
        return await this.storeRepository.save(infos)
    }

}

export default new StoreService();