import {Request, Response} from "express";
import StaffService from "../service/staffService";

class StaffController {
    private StaffService;

    constructor() {
        this.StaffService = StaffService;
    }

    staffUpdateInfo = async (req: Request, res: Response) => {
        if (await this.StaffService.staffCheck(req.body).length != 0) {
            await res.status(406).json('The username already existed!');
        } else {
            await StaffService.staffUpdate(req.body)
            await res.status(201).json('Your account has been updated!');
        }
    }
}

export default new StaffController();