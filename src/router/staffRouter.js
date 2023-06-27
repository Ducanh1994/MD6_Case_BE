"use strict";
exports.__esModule = true;
exports.staffRouter = void 0;
var express_1 = require("express");
var auth_1 = require("../middleware/auth");
var staffAuth_1 = require("../middleware/staffAuth");
var staffController_1 = require("../controller/staffController");
exports.staffRouter = (0, express_1.Router)();
exports.staffRouter.use(auth_1.auth);
exports.staffRouter.use(staffAuth_1.staffAuth);
exports.staffRouter.get('/search/Staff', staffController_1["default"].searchStaff);
exports.staffRouter.get('/search/User', staffController_1["default"].staffSearchUser);
// staffRouter.post('/updateAccount/', StaffController.staffUpdateInfo);