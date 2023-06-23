import {Request, Response} from 'express'
import adminService from "../service/adminService"
import staffService from "../service/staffService";

class AdminController {
    private adminService;
    private staffService;

    constructor() {
        this.adminService = adminService;
        this.staffService = staffService
    }

    createStaff = async (req: Request, res: Response) => {
        try {
            let userCheck = await this.adminService.checkUser(req.body);
            if (userCheck.length !== 0) {
                await res.status(406).json('The username already existed!');
            } else {
                await this.adminService.createStaff(req.body);
                await res.status(201).json('Create new user successfully!');
            }
        } catch (error) {
            await res.status(500).json(error + ' at createAccount in adminController');
        }
    }

    // Await Update For Display All User's Detail
    // Await Response For Found Entity
    searchAccount = async (req: Request, res: Response) => {
        try {
            let userFound = await this.adminService.searchUser(req.query);
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

    showAllAccount = async (req: Request, res: Response) => {
        try {
            let allAccount = await this.adminService.showUser();
            await res.status(202).json(allAccount);
        } catch (error) {
            await res.status(500).json(
                error + ' at showAllAccount in adminController');
        }
    }

    showAllStaffs = async (req: Request, res: Response) => {
        try {
            let staffs = await this.staffService.getStaffs();
            res.status(202).json({
                success : true,
                message: 'oke',
                data : staffs
            })
        } catch (error) {
            res.status(500).json(
                {
                    message: 'error in showAllStaff',
                    error : error,
                    success : false
                }
            )
        }
    }

    addStaff = async (req: Request, res: Response) => {
        console.log('da vao add staff')
        let staff = req.body
        try {
            let message = await this.staffService.checkStaff(staff);
            if(!message){
                await this.staffService.addStaffs(staff);
                res.status(200).json({
                    success: true,
                    data: staff.id
                })
            } else {
                res.status(200).json({
                    success: false,
                    data: message
                })
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: error,
                success: false,
                message: 'Error in creating Staff'
            })
        }
    }


}

export default new AdminController();

