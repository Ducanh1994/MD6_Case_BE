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
var storeService_1 = require("../service/storeService");
var adminService_1 = require("../service/adminService");
var StoreController = /** @class */ (function () {
    function StoreController() {
        var _this = this;
        this.getStoreInformation = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var userID, user, shopId, shop, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("vao getStoreInformation ");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        userID = req['decode'].id;
                        return [4 /*yield*/, adminService_1["default"].searchOneUserByID(userID)];
                    case 2:
                        user = _a.sent();
                        shopId = user.store.id;
                        return [4 /*yield*/, this.StoreService.findOwnStore(shopId)];
                    case 3:
                        shop = _a.sent();
                        res.status(200).json(shop);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        res.status(500).json(error_1 + ' at getStoreInformation in storeController');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.updateStoreInformation = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var updateShop, userID, user, shopId, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        updateShop = req.body;
                        userID = req['decode'].id;
                        return [4 /*yield*/, adminService_1["default"].searchOneUserByID(userID)];
                    case 1:
                        user = _a.sent();
                        shopId = user.store.id;
                        return [4 /*yield*/, this.StoreService.updateStoreInformationService(shopId, updateShop)];
                    case 2:
                        _a.sent();
                        res.status(202).json('Update success');
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        res.status(500).json(error_2 + ' at getStoreInformation in storeController');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getStoreType = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var storeType, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.StoreService.showStoreType()];
                    case 1:
                        storeType = _a.sent();
                        res.status(202).json(storeType);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        res.status(500).json(error_3 + ' at getStoreInformation in storeController');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.createStore = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var userID, user, storeDetail, createdShop, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        userID = req['decode'].id;
                        return [4 /*yield*/, adminService_1["default"].searchOneUserByID(userID)];
                    case 1:
                        user = _a.sent();
                        storeDetail = req.body;
                        storeDetail.user = user;
                        return [4 /*yield*/, this.StoreService.createStoreDetail(storeDetail)];
                    case 2:
                        createdShop = _a.sent();
                        return [4 /*yield*/, res.status(201).json(createdShop)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_4 = _a.sent();
                        return [4 /*yield*/, res.status(500).json(error_4 + ' at createStore in storeController')];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.searchStoreWithID = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var storeID, storeList, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 5]);
                        storeID = req.query.storeID;
                        return [4 /*yield*/, this.StoreService.searchStoreByID(storeID)];
                    case 1:
                        storeList = _a.sent();
                        return [4 /*yield*/, res.status(202).json(storeList)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        error_5 = _a.sent();
                        return [4 /*yield*/, res.status(500).json(error_5 + ' at searchStoreWithID in storeController')];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.editStore = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var userID, storeDetail, editStatus, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 5]);
                        userID = req['decode'].id;
                        storeDetail = req.body;
                        return [4 /*yield*/, storeService_1["default"].editStoreDetail(userID, storeDetail)];
                    case 1:
                        editStatus = _a.sent();
                        return [4 /*yield*/, res.status(202).json(editStatus)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        error_6 = _a.sent();
                        return [4 /*yield*/, res.status(500).json(error_6 + ' at editStore in storeController')];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.StoreService = storeService_1["default"];
    }
    return StoreController;
}());
exports["default"] = new StoreController();
