"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StoreType = void 0;
var typeorm_1 = require("typeorm");
var store_1 = require("./store");
var StoreType = /** @class */ (function () {
    function StoreType() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], StoreType.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar" })
    ], StoreType.prototype, "name");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return store_1.Store; }, function (store) { return store.storeType; })
    ], StoreType.prototype, "store");
    StoreType = __decorate([
        (0, typeorm_1.Entity)()
    ], StoreType);
    return StoreType;
}());
exports.StoreType = StoreType;
