import {User} from "../entity/user";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt'

class AdminService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    // Conditional To Create New Account
    checkUser = async (user) => {
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
    }

    // Admin Create New Account
    createUser = async (user) => {
        user.password = await bcrypt.hash(user.password,10);
        user.role = 'staff'
        return this.userRepository.save(user);
    }
}

export default new AdminService();

