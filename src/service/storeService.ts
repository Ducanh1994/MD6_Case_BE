import {Store} from "../enitity/store";
import {AppDataSource} from "../data-source";
import {StoreType} from "../enitity/storeType";

class StoreService {
    private storeRepository;

    constructor() {
        this.storeRepository = AppDataSource.getRepository(Store);
    }

    getAllInfo = async () => {
        const infos = await this.storeRepository.find({
            relations: {
                storeType: true
            },
        });
        return infos;
    }
    addInfo = async (infos) => {
        return await this.storeRepository.save(infos)
    }
    findStoreById = async (id) => {
        return await this.storeRepository.findOne({
            where: {id: id},
            relations: {storeType: true}
        })
    }
    editStore = async (id, storeInfos) => {
        // console.log("storeInfos", storeInfos)
        // storeInfos.storeType = AppDataSource.getRepository(StoreType)
        //     .findOneBy({
        //         id: storeInfos.storeType.id
        //     });
        // return await this.storeRepository.update({id: id}, storeInfos)

        return await this.storeRepository
            .createQueryBuilder()
            .update(Store)
            .set({
                name: storeInfos.name,
                avatar: storeInfos.avatar,
                email: storeInfos.email,
                origin: storeInfos.origin,
                country: storeInfos.country,
                telephone: storeInfos.telephone,
                address: storeInfos.address,
                storeType: storeInfos.storeType.id
            })
            .where({id: id})
            .execute()
    }

}

export default new StoreService();