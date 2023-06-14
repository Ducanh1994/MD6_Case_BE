import {Request, Response} from "express";
import UserService from "../service/userService";
import {userRouter} from "../router/userRouter";
import userService from "../service/userService";

class UserController {

    constructor() {
    }

    login = async (req: Request, res: Response) => {
        console.log(req.body)
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
