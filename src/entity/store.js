"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Store = void 0;
var typeorm_1 = require("typeorm");
var user_1 = require("./user");
var product_1 = require("./product");
var storeType_1 = require("./storeType");
var Store = /** @class */ (function () {
    function Store() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Store.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", unique: true })
    ], Store.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)({ type: "longtext", nullable: true })
    ], Store.prototype, "avatar");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", unique: true })
    ], Store.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)({ type: "longtext" })
    ], Store.prototype, "origin");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar" })
    ], Store.prototype, "country");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar" })
    ], Store.prototype, "telephone");
    __decorate([
        (0, typeorm_1.Column)({ type: "longtext" })
    ], Store.prototype, "address");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", "default": "Inactive" })
    ], Store.prototype, "status");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return product_1.Product; }, function (product) { return product.store; })
    ], Store.prototype, "products");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_1.User; }, function (user) { return user.store; })
    ], Store.prototype, "user");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return storeType_1.StoreType; }, function (storeType) { return storeType.store; })
    ], Store.prototype, "storeType");
    Store = __decorate([
        (0, typeorm_1.Entity)()
    ], Store);
    return Store;
}());
exports.Store = Store;
