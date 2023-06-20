import {User} from "../entity/user"
import {AppDataSource} from "../data-source";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {SECRET} from "../middleware/auth";

class UserService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    creatUser = async (user) => {
        console.log('da vao creatUser:')
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(user.password,salt);
        //creat new user
        let newUser = new User();
            newUser.username = user.username;
            newUser.email = user.email;
            newUser.password = hashed;
            newUser.role = 'seller';

        await this.userRepository.save(newUser);
        return newUser
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
    checkUserSingup = async (user) => {
        const [findUsername, findEmail] = await Promise.all([
            this.userRepository.findOne({where: {username: user.username}}),
            this.userRepository.findOne({where: {email: user.email}})
        ]);

        if (findUsername) {
            return 'Username already exists';
        }

        if (findEmail) {
            return 'Email already exists';
        }

        return undefined;
    }
}

export default new UserService();