import {Router} from "express";
import StaffController from "../controller/staffController";

export const staffRouter = Router();

staffRouter.post('/updateAccount/', StaffController.staffUpdateInfo)