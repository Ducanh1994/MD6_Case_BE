import {AppDataSource} from "../data-source";
import {Store} from "../entity/store";
import {User} from "../entity/user";
import bcrypt from "bcrypt";


class StoreService {
    private StoreRepository;
    private UserRepository;

    constructor() {
        this.StoreRepository = AppDataSource.getRepository(Store);
        this.UserRepository = AppDataSource.getRepository(User);
    }

    showStoreInformation = async (userID) => {
        try {
            const storeInfo = await this.StoreRepository.findOne({
                relations: {
                    storeType: true
                }, where: {
                    userId: userID
                }
            });
            if (!storeInfo) {
                return 'There is no store found';
            } else {
                return storeInfo;
            }
        } catch (error) {
            console.log(error + ' at showStoreInformation in storeService');
        }
    }

    showStoreType = async (userID) => {
        try {
            const storeInfo = await this.StoreRepository.findOne({
                relations: {
                    storeType: true
                }, where: {
                    userId: userID,
                }
            });
            if (!storeInfo) {
                return 'There is no store type found';
            } else {
                let storeType = storeInfo.storeType;
                return storeType;
            }
        } catch (error) {
            console.log(error + ' at showStoreType in storeService');
        }
    }

    createStoreDetail = async (userID, store) => {
        try {
            await this.StoreRepository.create({
                name: store.name,
                avatar: store.avatar,
                email: store.email,
                origin: store.origin,
                country: store.country,
                telephone: store.telephone,
                address: store.address,
                userId: userID,
                storeTypeId: store.storeTypeId,
                status: "Inactive",
            })

            let storeID = await this.showStoreInformation(userID);
            await this.UserRepository.update({storeId: storeID});
            return 'Store created';
        } catch (error) {
            console.log(error + ' at createStoreDetail in storeService');
        }
    }

    searchStoreByID = async (storeID) => {
        try {
            const foundStore = await this.StoreRepository.findOne({
                relations: {
                    storeType: true
                }, where: {
                    id: storeID
                }
            });
            if (!foundStore) {
                return 'There is no store found';
            } else {
                return foundStore;
            }
        } catch (error) {
            console.log(error + ' at searchStoreByID in storeService');
        }
    }

    // Update editStoreDetail cause un-optimized code
    editStoreDetail = async (userID, storeDetail) => {
        try {
            let foundAccount = await this.StoreRepository.find({
                relations: true,
                where: {
                    userId: {
                        id: userID
                    }
                }
            })

            if (!foundAccount) {
                return 'There is no account that exists';
            } else {
                await this.showStoreInformation(userID);

                await this.StoreRepository.save({
                    id: foundAccount.id,
                    name: storeDetail.name,
                    avatar: storeDetail.avatar,
                    email: storeDetail.email,
                    origin: storeDetail.origin,
                    country: storeDetail.country,
                    telephone: storeDetail.telephone,
                    address: storeDetail.address,
                    storeTypeId: storeDetail.storeTypeId
                });

                storeDetail.password = await bcrypt.hash(storeDetail.password, 10);

                await this.UserRepository.save({
                    id: userID,
                    password: storeDetail.password
                })

                // return await this.storeRepository
                //     .createQueryBuilder()
                //     .update(Store)
                //     .set({
                //         name: storeDetail.name,
                //         avatar: storeDetail.avatar,
                //         email: storeDetail.email,
                //         origin: storeDetail.origin,
                //         country: storeDetail.country,
                //         telephone: storeDetail.telephone,
                //         address: storeDetail.address,
                //         storeType: storeDetail.storeType.id
                //     })
                //     .where({id: storeID})
                //     .execute()

                return 'Store updated';
            }
        } catch (error) {
            console.log(error + ' at editStoreDetail in storeService');
        }
    }
}

export default new StoreService();