import {AppDataSource} from "../data-source";
import {User} from '../entity/user'
import bcrypt from "bcrypt";

class StaffService {
    private UserRepository;

    constructor() {
        this.UserRepository = AppDataSource.getRepository(User);
    }

    // Finding staff with their ID
    searchAll = async () => {
        try {
            let foundStaff = await this.UserRepository.find({
                where: {
                    role: "user" || "staff"
                }
            })
            if (!foundStaff) {
                return 'There is no staff found';
            } else {
                return foundStaff;
            }
        } catch (error) {
            console.log(error + ' at staffCheck in staffService');
        }
    }

    searchStaff = async () => {
        try {
            let foundStaff = await this.UserRepository.find({
                where: {
                    role: "staff"
                }
            })
                return foundStaff;
        } catch (error) {
            console.log(error + ' at staffCheck in staffService');
        }
    }

    // Finding user with their ID
    searchUser = async () => {
        try {
            let foundStaff = await this.UserRepository.find({
                where: {
                    role: "user"
                }
            })
            if (!foundStaff) {
                return 'There is no staff found';
            } else {
                return foundStaff;
            }
        } catch (error) {
            console.log(error + ' at staffCheck in staffService');
        }
    }

    // Staff updating their information
    staffUpdate = async (userInfo) => {
        try {
            userInfo.password = await bcrypt.hash(userInfo.password, 10);
            return await this.UserRepository.save(userInfo);
        } catch (error) {
            console.log(error + ' at staffUpdate in staffService');
        }
    }
}

export default new StaffService();