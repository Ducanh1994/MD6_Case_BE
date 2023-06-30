import {Router} from 'express'
import {auth} from "../middleware/auth";
import {adminAuth} from "../middleware/adminAuth";
import AdminController from "../controller/adminController";

export const adminRouter = Router()

// adminRouter.use(auth)
// adminRouter.use(adminAuth)
//Router for Admin Specific Function. Modified to add more feature as more sprint progress

adminRouter.post('/createAccount/', AdminController.createStaff);
adminRouter.get('/showAccount/', AdminController.showAllAccount);
adminRouter.get('/searchAccount/', AdminController.searchAccount);
adminRouter.post('/enablingAccount/', AdminController.enablingShopAccount);
adminRouter.post('/rejectAccount/', AdminController.rejectShopAccount);
adminRouter.get('/get-staffs',AdminController.showAllStaffs);
adminRouter.post('/add-staff',AdminController.addStaff);
adminRouter.get('/pagination-staffs/',AdminController.PaginationStaff)
adminRouter.get('/pagination-shops/',AdminController.PaginationShop)
adminRouter.get('/pagination-shops-active/',AdminController.PaginationShopActive)


