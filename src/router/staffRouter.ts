import {Router} from "express";
import {auth} from "../middleware/auth";
import {staffAuth} from "../middleware/staffAuth";
import StaffController from "../controller/staffController";

export const staffRouter = Router();

staffRouter.use(auth);
staffRouter.use(staffAuth);
staffRouter.post('/updateAccount/', StaffController.staffUpdateInfo);