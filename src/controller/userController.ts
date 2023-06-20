import {Request, Response} from "express";
import userService from "../service/userService";
import bcrypt from "bcrypt";

class UserController {

    constructor() {
    }
    register = async (req: Request, res: Response) => {
        try {
            const check = await userService.checkUserSingup(req.body);
            if(check === "Username already exists") {
                return res.status(201).json("Username already exists");
            }
            if(check === "Email already exists") {
                return res.status(201).json("Email already exists");
            }

             await userService.creatUser(req.body);
            return res.status(201).json('Account created successfully');
        } catch (err) {
            console.log("Lỗi server:", err);
            return res.status(500).json(err);
        }
    };

    login = async (req: Request, res: Response) => {
        let resultCheck = await userService.checkUser(req.body);
        res.status(200).json(resultCheck);
    }


    showAllStaff = async (req: Request, res: Response)=>{
        try{
            let staffs = await userService.findAllStaff()
            res.status(200).json(staffs)
        }catch (err){
            console.log('lỗi server:',err)
            res.status(500).json(err)
        }
    }

}

export default new UserController();
