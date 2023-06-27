"use strict";
exports.__esModule = true;
exports.loggedInRouter = void 0;
var express_1 = require("express");
var auth_1 = require("../middleware/auth");
var userController_1 = require("../controller/userController");
exports.loggedInRouter = (0, express_1.Router)();
exports.loggedInRouter.use(auth_1.auth);
exports.loggedInRouter.put('/update-account', userController_1["default"].updateAccount);
