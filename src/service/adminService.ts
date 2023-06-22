import {User} from "../entity/user";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt'
import {Like} from 'typeorm'

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
        user.password = await bcrypt.hash(user.password, 10);
        user.password = await bcrypt.hash(user.password,10);
        user.role = 'staff'
        return this.userRepository.save(user);
    }

    // Admin Search Account with the search query provided
    searchUser = async (user) => {
        console.log(user)
        let foundAccount = await this.userRepository.find({
            where: [
                {
                    username: Like(`${user.username}%`)
                },
                {
                    name: Like(`${user.name}%`)
                }
            ]
        })
        return foundAccount;
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
}

export default new AdminService();

