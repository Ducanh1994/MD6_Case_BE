import {Router} from 'express'
import AdminController from "../controller/adminController";

export const adminRouter = Router()

adminRouter.post('/createAccount', AdminController.createAccount);
