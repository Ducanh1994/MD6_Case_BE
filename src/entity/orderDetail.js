"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderDetail = void 0;
var typeorm_1 = require("typeorm");
var order_1 = require("./order");
var product_1 = require("./product");
var OrderDetail = /** @class */ (function () {
    function OrderDetail() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], OrderDetail.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ type: "bigint", "default": 0 })
    ], OrderDetail.prototype, "price");
    __decorate([
        (0, typeorm_1.Column)({ type: "bigint", "default": 0 })
    ], OrderDetail.prototype, "quantity");
    __decorate([
        (0, typeorm_1.Column)({ type: "bigint", "default": 0 })
    ], OrderDetail.prototype, "totalPrice");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return order_1.Order; }, function (order) { return order.orderDetails; }),
        (0, typeorm_1.JoinColumn)()
    ], OrderDetail.prototype, "order");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_1.Product; }, function (product) { return product.orderDetails; })
    ], OrderDetail.prototype, "product");
    OrderDetail = __decorate([
        (0, typeorm_1.Entity)()
    ], OrderDetail);
    return OrderDetail;
}());
exports.OrderDetail = OrderDetail;
