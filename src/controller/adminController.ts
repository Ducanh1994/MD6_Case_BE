import {Request, Response} from 'express'
import adminService from "../service/adminService"

class AdminController {
    private adminService;

    constructor() {
        this.adminService = adminService;
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

    // Await Response For Found Entity
    searchAccount = async (req: Request, res: Response) => {
        let userFound = await adminService.searchUser(req.query);
        await res.status(201).json(userFound);
    }

    showAllAccount = async (req: Request, res: Response) => {
        try {
            let allAccount = await this.adminService.showUser();
            await res.status(202).json(allAccount);
        } catch (error) {
            await res.status(500).json(error + ' at showAllAccount in adminController');
        }
    }
}

export default new AdminController();

