"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var data_source_1 = require("../data-source");
var store_1 = require("../entity/store");
var user_1 = require("../entity/user");
var bcrypt_1 = require("bcrypt");
var storeType_1 = require("../entity/storeType");
var StoreService = /** @class */ (function () {
    function StoreService() {
        var _this = this;
        this.showStoreInformation = function (userID) { return __awaiter(_this, void 0, void 0, function () {
            var storeInfo, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.StoreRepository.findOne({
                                relations: {
                                    storeType: true
                                }, where: {
                                    userId: userID
                                }
                            })];
                    case 1:
                        storeInfo = _a.sent();
                        if (!storeInfo) {
                            return [2 /*return*/, 'There is no store found'];
                        }
                        else {
                            return [2 /*return*/, storeInfo];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1 + ' at showStoreInformation in storeService');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.showStoreType = function () { return __awaiter(_this, void 0, void 0, function () {
            var storeType, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.StoreTypeRepository.find({})];
                    case 1:
                        storeType = _a.sent();
                        if (!storeType) {
                            return [2 /*return*/, 'There is no store type found'];
                        }
                        else {
                            return [2 /*return*/, storeType];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2 + ' at showStoreType in storeService');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.createStoreDetail = function (store) { return __awaiter(_this, void 0, void 0, function () {
            var createdShop, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.StoreRepository.save(store)];
                    case 1:
                        createdShop = _a.sent();
                        return [2 /*return*/, createdShop];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3 + ' at createStoreDetail in storeService');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.searchStoreByID = function (storeID) { return __awaiter(_this, void 0, void 0, function () {
            var foundStore, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.StoreRepository.findOne({
                                relations: {
                                    storeType: true
                                }, where: {
                                    id: storeID
                                }
                            })];
                    case 1:
                        foundStore = _a.sent();
                        if (!foundStore) {
                            return [2 /*return*/, 'There is no store found'];
                        }
                        else {
                            return [2 /*return*/, foundStore];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4 + ' at searchStoreByID in storeService');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        // Update editStoreDetail cause un-optimized code
        this.editStoreDetail = function (userID, storeDetail) { return __awaiter(_this, void 0, void 0, function () {
            var foundAccount, _a, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 8, , 9]);
                        return [4 /*yield*/, this.StoreRepository.find({
                                relations: true,
                                where: {
                                    userId: {
                                        id: userID
                                    }
                                }
                            })];
                    case 1:
                        foundAccount = _b.sent();
                        if (!!foundAccount) return [3 /*break*/, 2];
                        return [2 /*return*/, 'There is no account that exists'];
                    case 2: return [4 /*yield*/, this.showStoreInformation(userID)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.StoreRepository.save({
                                id: foundAccount.id,
                                name: storeDetail.name,
                                avatar: storeDetail.avatar,
                                email: storeDetail.email,
                                origin: storeDetail.origin,
                                country: storeDetail.country,
                                telephone: storeDetail.telephone,
                                address: storeDetail.address,
                                storeTypeId: storeDetail.storeTypeId
                            })];
                    case 4:
                        _b.sent();
                        _a = storeDetail;
                        return [4 /*yield*/, bcrypt_1["default"].hash(storeDetail.password, 10)];
                    case 5:
                        _a.password = _b.sent();
                        return [4 /*yield*/, this.UserRepository.save({
                                id: userID,
                                password: storeDetail.password
                            })
                            // return await this.storeRepository
                            //     .createQueryBuilder()
                            //     .update(Store)
                            //     .set({
                            //         name: storeDetail.name,
                            //         avatar: storeDetail.avatar,
                            //         email: storeDetail.email,
                            //         origin: storeDetail.origin,
                            //         country: storeDetail.country,
                            //         telephone: storeDetail.telephone,
                            //         address: storeDetail.address,
                            //         storeType: storeDetail.storeType.id
                            //     })
                            //     .where({id: storeID})
                            //     .execute()
                        ];
                    case 6:
                        _b.sent();
                        // return await this.storeRepository
                        //     .createQueryBuilder()
                        //     .update(Store)
                        //     .set({
                        //         name: storeDetail.name,
                        //         avatar: storeDetail.avatar,
                        //         email: storeDetail.email,
                        //         origin: storeDetail.origin,
                        //         country: storeDetail.country,
                        //         telephone: storeDetail.telephone,
                        //         address: storeDetail.address,
                        //         storeType: storeDetail.storeType.id
                        //     })
                        //     .where({id: storeID})
                        //     .execute()
                        return [2 /*return*/, 'Store updated'];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_5 = _b.sent();
                        console.log(error_5 + ' at editStoreDetail in storeService');
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        }); };
        this.findOwnStore = function (storeID) { return __awaiter(_this, void 0, void 0, function () {
            var foundStore, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.StoreRepository.findOne({
                                relations: {
                                    storeType: true,
                                    products: true
                                }, where: {
                                    id: storeID
                                }
                            })];
                    case 1:
                        foundStore = _a.sent();
                        if (!foundStore) {
                            return [2 /*return*/, 'There is no store found'];
                        }
                        else {
                            return [2 /*return*/, foundStore];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        console.log(error_6 + ' at searchStoreByID in storeService');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.updateStoreInformationService = function (shopId, updateStore) { return __awaiter(_this, void 0, void 0, function () {
            var error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.StoreRepository.update(shopId, updateStore)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_7 = _a.sent();
                        console.log(error_7 + ' at searchStoreByID in storeService');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.StoreRepository = data_source_1.AppDataSource.getRepository(store_1.Store);
        this.UserRepository = data_source_1.AppDataSource.getRepository(user_1.User);
        this.StoreTypeRepository = data_source_1.AppDataSource.getRepository(storeType_1.StoreType);
    }
    return StoreService;
}());
exports["default"] = new StoreService();
