"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var typeorm_1 = require("typeorm");
var order_1 = require("./order");
var store_1 = require("./store");
var User = /** @class */ (function () {
    //Some attributes can't be empty and can only exist once. Use Unique and Nullable
    function User() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], User.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", unique: true })
    ], User.prototype, "username");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", unique: true })
    ], User.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", "default": '123456@Abc' })
    ], User.prototype, "password");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", "default": 'user' })
    ], User.prototype, "role");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true })
    ], User.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true })
    ], User.prototype, "age");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true })
    ], User.prototype, "phoneNumber");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true })
    ], User.prototype, "address");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true })
    ], User.prototype, "salary");
    __decorate([
        (0, typeorm_1.Column)({ type: "longtext", nullable: true })
    ], User.prototype, "image");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return order_1.Order; }, function (order) { return order.user; })
    ], User.prototype, "orders");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return store_1.Store; }, function (store) { return store.user; }),
        (0, typeorm_1.JoinColumn)()
    ], User.prototype, "store");
    User = __decorate([
        (0, typeorm_1.Entity)()
        //Some attributes can't be empty and can only exist once. Use Unique and Nullable
    ], User);
    return User;
}());
exports.User = User;
