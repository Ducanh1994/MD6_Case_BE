import {AppDataSource} from "../data-source";
import {Store} from "../entity/store";
import {User} from "../entity/user";
import bcrypt from 'bcrypt'
import {Like, Repository} from 'typeorm'

class AdminService {
    private storeRepository:Repository<Store>;
    private userRepository:Repository<User>;

    constructor() {
        this.storeRepository = AppDataSource.getRepository(Store);
        this.userRepository = AppDataSource.getRepository(User);
    }

    checkUser = async (user) => {
            return await this.userRepository.find({
                where: [
                    {
                        username: user.username
                    },
                    {
                        name: user.name
                    }
                ]
            })
    }

    createStaff = async (user) => {
            user.password = await bcrypt.hash(user.password, 10);
            user.role = 'staff';
            return this.userRepository.save(user);
    }

    searchUser = async (user) => {
            let foundAccount = await this.userRepository.find({
                where: [
                    {
                        username: Like(`${user.username}%`), role: "staff"
                    },
                    {
                        name: Like(`${user.name}%`), role:"staff"
                    }
                ]
            })
            if (!foundAccount) {
                return 'There is no account that exists';
            } else {
                return foundAccount;
            }
    }

    getShop = async () => {
        return await this.storeRepository.find({
            where: {
                status: "Inactive"
            },
        })
    }

    getShopActive = async () => {
        return await this.storeRepository.find({
            where: {
                status: "Active"
            },
        })
    }

    paginationShop =  async (page,page_size) => {
        let start = (page -1) * page_size;
        let end = start + parseInt(page_size)
        let shops =  await this.getShop()
        let paginaShop = shops.slice(start,end)
        return {
            total: shops.length,
            paginationShop: paginaShop
        }
    }

    paginationShopActive =  async (page,page_size) => {
        let start = (page -1) * page_size;
        let end = start + parseInt(page_size)
        let shops =  await this.getShopActive()
        let paginaShop = shops.slice(start,end)
        return {
            total: shops.length,
            paginationShop: paginaShop
        }
    }

    searchOneUserByID = async (userID) => {
           return await this.userRepository.findOne({
               relations: ['store', 'store.storeType'],
               where: { id: userID } });
    }


    enablingShop = async (shop) => {
            let foundStore = await this.storeRepository.find({
                where: {
                        id: shop.storeID
                }
            })

            foundStore[0].status = "Active"
            if (!foundStore) {
                return 'Store not found';
            } else {
                await this.storeRepository.save({
                    id: foundStore[0].id,
                    ...foundStore[0]
                })

                let foundUser = await this.userRepository.find({
                    where: {
                        store: shop.id
                    }
                })
                foundUser[0].role = "seller"

                await this.userRepository.save({
                    ...foundUser[0]
                })


                return 'The store has been active';
            }
    }


    showUser = async () => {
            let allAccount = await this.userRepository.find({
                where: {
                    role: "staff"
                }
            })
            if (!allAccount) {
                return 'There is no account that exists';
            } else {
                return allAccount;
            }
    }

    rejectShop = async (store) => {
            let foundUser = await this.userRepository.find({
                where: {
                  store: store.id
                }
            })
            foundUser[0].role = "client";
            foundUser[0].store= null;

            await this.userRepository.save({
                ...foundUser[0]
            })
            let foundStore = await this.storeRepository.find({
                where: {
                    id: store.storeID
                }
            })
            if (!foundStore) {
                return 'Store not found';
            } else {
                await this.storeRepository.delete({
                    id: store.storeID
                })
                return 'The store has been reject';
            }
    }
}

export default new AdminService();

