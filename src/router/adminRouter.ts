import {Router} from 'express'
import AdminController from "../controller/adminController";

export const adminRouter = Router()

//Router for Admin Specific Function. Modified to add more feature as more sprint progress
adminRouter.post('/createAccount/', AdminController.createAccount);
// Search Function need to be configured with name and username query in FE
adminRouter.get('/searchAccount/', AdminController.searchAccount);
