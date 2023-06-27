"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Order = void 0;
var typeorm_1 = require("typeorm");
var orderDetail_1 = require("./orderDetail");
var user_1 = require("./user");
var Order = /** @class */ (function () {
    function Order() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Order.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", "default": "Unpaid" })
    ], Order.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)({ type: "bigint", "default": 0 })
    ], Order.prototype, "totalMoney");
    __decorate([
        (0, typeorm_1.Column)({ type: "timestamp", "default": function () { return "CURRENT_TIMESTAMP"; }, onUpdate: "CURRENT_TIMESTAMP" })
    ], Order.prototype, "date");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return orderDetail_1.OrderDetail; }, function (orderDetail) { return orderDetail.order; })
    ], Order.prototype, "orderDetails");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_1.User; }, function (user) { return user.orders; })
    ], Order.prototype, "user");
    Order = __decorate([
        (0, typeorm_1.Entity)()
    ], Order);
    return Order;
}());
exports.Order = Order;
