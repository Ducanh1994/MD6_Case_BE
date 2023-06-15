import {Request, Response} from 'express'
import adminService from "../service/adminService"

class AdminController {
    private adminService;

    constructor() {
        this.adminService = adminService
    }

    // Await Update For Creating New Account
    createAccount = async (req: Request, res: Response) => {
        let userCheck = await adminService.checkUser(req.body);
        if (userCheck.length !== 0) {
            await res.status(406).json('The username already existed!');
        } else {
            await adminService.createUser(req.body);
            await res.status(201).json('Create new user successfully!');
        }
    }
}

export default new AdminController();

