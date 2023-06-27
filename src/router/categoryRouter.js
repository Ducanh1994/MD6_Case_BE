"use strict";
exports.__esModule = true;
var express_1 = require("express");
var categoryController_1 = require("../controller/categoryController");
var categoryRouter = (0, express_1.Router)();
categoryRouter.get('/', categoryController_1["default"].getCategory);
categoryRouter.get('/search/ID', categoryController_1["default"].searchCategoryWithID);
exports["default"] = categoryRouter;
