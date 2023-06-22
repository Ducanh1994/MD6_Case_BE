import {AppDataSource} from "../data-source";
import {User} from '../entity/user'
import bcrypt from "bcrypt";

class StaffService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    staffCheck = async (user) => {
        let foundStaff = await this.userRepository.find({
            where: {
                username: user.username
            }
        })
        return foundStaff;
    }

    staffUpdate = async (userInfo) => {
        userInfo.password = await bcrypt.hash(userInfo.password, 10);
        return await this.userRepository.save(userInfo);
    }


}

export default new StaffService();