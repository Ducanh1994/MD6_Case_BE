import {Router} from 'express'
import {auth} from "../middleware/auth";
import {adminAuth} from "../middleware/adminAuth";
import AdminController from "../controller/adminController";

export const adminRouter = Router()

adminRouter.use(auth)
// adminRouter.use(adminAuth)
//Router for Admin Specific Function. Modified to add more feature as more sprint progress
adminRouter.post('/createAccount/', AdminController.createAccount);
// Search Function need to be configured with name and username query in FE
adminRouter.get('/searchAccount/', AdminController.searchAccount);
adminRouter.post('/createAccount', AdminController.createAccount);
adminRouter.get('/showAllAccount/',adminAuth, AdminController.showAllAccount);

