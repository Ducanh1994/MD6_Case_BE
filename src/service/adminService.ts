import {AppDataSource} from "../data-source";
import {Store} from "../entity/store";
import {User} from "../entity/user";
import bcrypt from 'bcrypt'
import {Like} from 'typeorm'

class AdminService {
    private storeRepository;
    private userRepository;

    constructor() {
        this.storeRepository = AppDataSource.getRepository(Store);
        this.userRepository = AppDataSource.getRepository(User);
    }

    checkUser = async (user) => {
        try {
            let findName = await this.userRepository.find({
                where: [
                    {
                        username: user.username
                    },
                    {
                        name: user.name
                    }
                ]
            })
            return findName;
        } catch (error) {
            console.log(error + ' at checkUser in adminService');
        }
    }

    createStaff = async (user) => {
        try {
            user.password = await bcrypt.hash(user.password, 10);
            user.role = 'staff';
            return this.userRepository.save(user);
        } catch (error) {
            console.log(error + ' at createUser in adminService');
        }
    }

    searchUser = async (user) => {
        try {
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
        } catch (error) {
            console.log(error + 'at searchUser in adminService');
        }
    }

    getShop = async () => {
        let shops = await this.storeRepository.find({
            where: {
                status: "Inactive"
            },
        })
        return shops
    }

    getShopActive = async () => {
        let shops = await this.storeRepository.find({
            where: {
                status: "Active"
            },
        })
        return shops
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

    // searchOneUserByID = async (userID) => {
    //     try {
    //         let foundAccount = await this.userRepository.findOne({
    //             where: {
    //                 id: userID
    //             }
    //         })
    //         if (!foundAccount) {
    //             return 'There is no account that exists';
    //         } else {
    //             return foundAccount;
    //         }
    //     } catch (error) {
    //         console.log(error + 'at searchUser in adminService');
    //     }
    // }


    searchOneUserByID = async (userID) => {
        try {
            let user = await this.userRepository.findOne({ relations: ['store', 'store.storeType'], where: { id: userID } });
            if (!user) {
                return 'There is no account that exists';
            } else {
                return user;
            }
        } catch (error) {
            console.log(error + 'at searchUser in adminService');
        }
    }


    enablingShop = async (shop) => {
        try {
            let foundStore = await this.storeRepository.find({
                relations: true,
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
                    relations: true,
                    where: {
                        store: {
                            id: shop.storeID
                        }
                    }
                })
                foundUser[0].role = "seller"

                await this.userRepository.save({
                    ...foundUser[0]
                })


                return 'The store has been active';
            }
        } catch (error) {
            console.log(error + ' at enablingShop in adminService');
        }
    }


    showUser = async () => {
        try {
            let allAccount = await this.userRepository.find({
                relations: true,
                where: {
                    role: "staff"
                }
            })
            if (!allAccount) {
                return 'There is no account that exists';
            } else {
                return allAccount;
            }
        } catch (error) {
            console.log(error + ' at showUser in adminService');
        }
    }

    rejectShop = async (shop) => {
        try {
            console.log(shop)
            let foundUser = await this.userRepository.find({
                relations: true,
                where: {
                    store: {
                        id: shop.storeID
                    }
                }
            })
            console.log(foundUser)
            foundUser[0].role = "client";
            foundUser[0].store= null;

            await this.userRepository.save({
                ...foundUser[0]
            })

            let foundStore = await this.storeRepository.find({
                relations: true,
                where: {
                    id: shop.storeID
                }
            })
            console.log(foundStore)

            // foundStore[0].status = "Active"
            if (!foundStore) {
                return 'Store not found';
            } else {
                await this.storeRepository.delete({
                    id: shop.storeID
                })


                return 'The store has been reject';
            }
        } catch (error) {
            console.log(error + ' at rejectShop in adminService');
        }
    }
}

export default new AdminService();

