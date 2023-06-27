"use strict";
exports.__esModule = true;
exports.productRouter = void 0;
var express_1 = require("express");
var productController_1 = require("../controller/productController");
exports.productRouter = (0, express_1.Router)();
exports.productRouter.get("/", productController_1["default"].getAllProduct);
exports.productRouter.get('/getOne/:id', productController_1["default"].searchProductWithID);
exports.productRouter.get('/search/productName', productController_1["default"].searchProductByName);
exports.productRouter.get('/search/productCategory', productController_1["default"].searchProductWithCategory);
exports.productRouter.get('/search/productPrice', productController_1["default"].searchProductWithPrice);