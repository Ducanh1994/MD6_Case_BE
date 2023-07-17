import {Request, Response} from "express";
import StaffService from "../service/staffService";
import orderService from "../service/orderService";

class StaffController {
    private StaffService;
    private orderService;

    constructor() {
        this.StaffService = StaffService;
        this.orderService = orderService;
    }

    searchAll = async (req: Request, res: Response) => {
            let userID = req.query.userID;
            let searchStatus = await this.StaffService.searchStaffByID(userID);
            res.status(202).json(searchStatus);
    }

    searchStaff = async (req: Request, res: Response) => {
            let userID = req.query.userID;
            let searchStatus = await this.StaffService.searchStaffByID(userID);
            res.status(202).json(searchStatus);
    }

    deleteStaffById = async (req: Request, res: Response) => {
            let id = parseInt(req.params.id);
           let order = await this.orderService.findOrderByUserId(id);
           const orderId = order.id;
            await this.orderService.deleteOrderByUserId(orderId);
            await this.StaffService.deleteStaff(id)
            res.status(200).json({
                success: true,
                message: "Employee information has been successfully deleted"
            })
    }

    staffSearchUser = async (req: Request, res: Response) => {
            let userID = req.query.userID;
            let searchStatus = await this.StaffService.searchUserByID(userID);
            res.status(202).json(searchStatus);
    }

    staffUpdateInfo = async (req: Request, res: Response) => {
            let userID = req['decode'].idUser;
            if (await this.StaffService.searchStaffByID(userID).length !== 0) {
                await this.StaffService.staffUpdate(req.body);
                res.status(202).json('Staff info successfully updated!');
            } else {
                res.status(202).json('Staff doesnt exists');
            }
    }

    findStaffById = async (req: Request, res: Response) => {
        let idStaff = req.params.id
            let staff =  await this.StaffService.searchStaffById(idStaff)

            res.status(200).json({
                data: staff[0],
                success: true,
                message: "oke"
            })
    }
}

export default new StaffController();