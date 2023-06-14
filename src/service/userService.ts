import {User} from "../enitity/user"
import {AppDataSource} from "../data-source";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {SECRET} from "../middleware/auth";

class UserService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    checkUser = async (user) => {
        let userFound = await this.userRepository.findOneBy({username: user.username})
        if (!userFound) {
            return 'User is not exist'
        } else {
            let passWordCompare = await bcrypt.compare(user.password, userFound.password);
            if (passWordCompare) {
                let payload = {
                    idUser: userFound.id,
                    username: userFound.username,
                    email: userFound.email,
                    role: userFound.role,
                    name: userFound.name,
                    age: userFound.age,
                    phoneNumber: userFound.phoneNumber,
                    address: userFound.address,
                    salary: userFound.salary
                }
                let token = await (jwt.sign(payload, SECRET, {
                    expiresIn: 36000 * 10 * 100
                }))
                payload['token'] = token
                return payload;
            } else {
                return 'Password is wrong'
            }
        }
    }

    findAllStaff = async () => {
        let staffs = await this.userRepository.find({
            where: {
                role: "staff",
            },
        })
        return staffs
    }
}

export default new UserService();