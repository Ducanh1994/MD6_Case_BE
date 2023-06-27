"use strict";
exports.__esModule = true;
exports.userRouter = void 0;
var express_1 = require("express");
var userController_1 = require("../controller/userController");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post('/login', userController_1["default"].login);
exports.userRouter.post('/register', userController_1["default"].register);
exports.userRouter.get('/staffs', userController_1["default"].showAllStaff);
