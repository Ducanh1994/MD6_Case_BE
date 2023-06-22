import {Request, Response} from 'express'
import adminService from "../service/adminService"

class AdminController {
    private adminService;

    constructor() {
        this.adminService = adminService;
    }

    createAccount = async (req: Request, res: Response) => {
        try {
            let userCheck = await this.adminService.checkUser(req.body);
            if (userCheck.length !== 0) {
                await res.status(406).json('The username already existed!');
            } else {
                await this.adminService.createUser(req.body);
                await res.status(201).json('Create new user successfully!');
            }
        } catch (error) {
            await res.status(500).json(error + ' at createAccount in adminController');
        }
    }

    // Await Update For Display All User's Detail
    showAllAccount = async (req: Request, res: Response) => {
        try {
            let allAccount = await this.adminService.showUser();
            await res.status(202).json(allAccount);
        } catch (error) {
            await res.status(500).json(error + ' at showAllAccount in adminController');
        }
    }

    // Await Response For Found Entity
    searchAccount = async (req: Request, res: Response) => {
        try {
            let userFound = await this.adminService.searchUser(req.query);
            console.log(userFound,22)
            await res.status(202).json(userFound);
        } catch (error) {
            await res.status(500).json(error + ' at searchAccount in adminController');
        }
    }

    enablingShopAccount = async (req: Request, res: Response) => {
        try {
            let shopStatus = await this.adminService.enablingShop(req.body);
            await res.status(201).json(shopStatus);
        } catch (error) {
            await res.status(500).json(error + ' at enablingShopAccount in adminController');
        }
    }
}

export default new AdminController();

