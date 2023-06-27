"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Product = void 0;
var typeorm_1 = require("typeorm");
var category_1 = require("./category");
var orderDetail_1 = require("./orderDetail");
var image_1 = require("./image");
var store_1 = require("./store");
var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Product.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar" })
    ], Product.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)({ type: "bigint" })
    ], Product.prototype, "price");
    __decorate([
        (0, typeorm_1.Column)({ type: "bigint" })
    ], Product.prototype, "quantity");
    __decorate([
        (0, typeorm_1.Column)({ type: "longtext", nullable: true })
    ], Product.prototype, "image");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return category_1.Category; }, function (category) { return category.products; })
    ], Product.prototype, "category");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return image_1.Image; }, function (image) { return image.product; })
    ], Product.prototype, "images");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return orderDetail_1.OrderDetail; }, function (orderDetail) { return orderDetail.product; })
    ], Product.prototype, "orderDetails");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return store_1.Store; }, function (store) { return store.products; })
    ], Product.prototype, "store");
    Product = __decorate([
        (0, typeorm_1.Entity)()
    ], Product);
    return Product;
}());
exports.Product = Product;
