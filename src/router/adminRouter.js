"use strict";
exports.__esModule = true;
exports.adminRouter = void 0;
var express_1 = require("express");
var adminController_1 = require("../controller/adminController");
exports.adminRouter = (0, express_1.Router)();
// adminRouter.use(auth)
// adminRouter.use(adminAuth)
//Router for Admin Specific Function. Modified to add more feature as more sprint progress
exports.adminRouter.post('/createAccount/', adminController_1["default"].createStaff);
exports.adminRouter.get('/showAccount/', adminController_1["default"].showAllAccount);
exports.adminRouter.get('/searchAccount/', adminController_1["default"].searchAccount);
exports.adminRouter.post('/enablingAccount/', adminController_1["default"].enablingShopAccount);
exports.adminRouter.get('/get-staffs', adminController_1["default"].showAllStaffs);
exports.adminRouter.post('/add-staff', adminController_1["default"].addStaff);
exports.adminRouter.get('/pagination-staffs/', adminController_1["default"].PaginationStaff);
