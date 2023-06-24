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

    getStaffs = async () => {
        let staffs = await this.UserRepository.find({
            where: {
                role: "staff"
            },
        })
        return staffs
    }

    checkStaff = async (staff) => {
        let username = await  this.UserRepository.find({ where: { username: staff.username }});
        let email = await this.UserRepository.find({ where: { email: staff.email }});

        return (username[0] ? "This username has already existed" : (email[0] ? "This email has already existed" : null));
    }

    addStaffs = async (staff) => {
        await this.UserRepository.save(staff)
    }

    paginationStaff =  async (page,page_size) => {
         let start = (page -1) * page_size;
         let end = start + parseInt(page_size)
        let staffs =  await this.getStaffs()
        let paginationStaff = staffs.slice(start,end)
        return {
             total: staffs.length,
            paginationStaff: paginationStaff
        }
    }
}

export default new StaffService();