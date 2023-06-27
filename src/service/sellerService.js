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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
exports.__esModule = true;
var data_source_1 = require("../data-source");
var product_1 = require("../entity/product");
var image_1 = require("../entity/image");
var store_1 = require("../entity/store");
var productService_1 = require("./productService");
var SellerService = /** @class */ (function () {
    function SellerService() {
        var _this = this;
        // Used for main seller page
        // findStoreByID = async (userID) => {
        //     try {
        //         const storeID = await this.StoreRepository.find({
        //             relations: true,
        //             where: {
        //                 user: {
        //                     id: userID
        //                 }
        //             }
        //         })
        //         if (!storeID) {
        //             return t
        //         }
        //     }
        // }
        this.showAllStoreInformation = function (storeID) { return __awaiter(_this, void 0, void 0, function () {
            var storeInformation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.StoreService.showStoreInformation(storeID)];
                    case 1:
                        storeInformation = _a.sent();
                        return [2 /*return*/, storeInformation];
                }
            });
        }); };
        this.updateStoreInformation = function (storeID) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        }); };
        //
        // findStore = async (userID) => {
        //     let foundStore = await this.storeRepository.find({
        //         where: {
        //             id: userID
        //         }
        //     })
        //     return foundStore;
        // }
        this.addImage = function (productId, images) { var _a, images_1, images_1_1; return __awaiter(_this, void 0, void 0, function () {
            var image, error_1, e_1_1;
            var _b, e_1, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 11, 12, 17]);
                        _a = true, images_1 = __asyncValues(images);
                        _e.label = 1;
                    case 1: return [4 /*yield*/, images_1.next()];
                    case 2:
                        if (!(images_1_1 = _e.sent(), _b = images_1_1.done, !_b)) return [3 /*break*/, 10];
                        _d = images_1_1.value;
                        _a = false;
                        _e.label = 3;
                    case 3:
                        _e.trys.push([3, , 8, 9]);
                        image = _d;
                        _e.label = 4;
                    case 4:
                        _e.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.ImageRepository.save({ product: productId, url: image })];
                    case 5:
                        _e.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _e.sent();
                        console.log(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        _a = true;
                        return [7 /*endfinally*/];
                    case 9: return [3 /*break*/, 1];
                    case 10: return [3 /*break*/, 17];
                    case 11:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 17];
                    case 12:
                        _e.trys.push([12, , 15, 16]);
                        if (!(!_a && !_b && (_c = images_1["return"]))) return [3 /*break*/, 14];
                        return [4 /*yield*/, _c.call(images_1)];
                    case 13:
                        _e.sent();
                        _e.label = 14;
                    case 14: return [3 /*break*/, 16];
                    case 15:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 16: return [7 /*endfinally*/];
                    case 17: return [2 /*return*/];
                }
            });
        }); };
        this.createProduct = function (product) { return __awaiter(_this, void 0, void 0, function () {
            var createdProduct, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.ProductRepository.save(product)];
                    case 1:
                        createdProduct = _a.sent();
                        return [2 /*return*/, createdProduct];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        throw new Error("Failed to create product.");
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.editProductService = function (productId, updateProduct) { return __awaiter(_this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.ProductRepository.update({ id: productId }, updateProduct)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.error(error_3);
                        throw new Error('Error while updating product');
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.editImagesService = function (productId, images) { return __awaiter(_this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.ImageRepository["delete"]({ product: { id: productId } })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.addImage(productId, images)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        console.error(error_4);
                        throw new Error('Error while updating images for product');
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.ProductRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
        this.ImageRepository = data_source_1.AppDataSource.getRepository(image_1.Image);
        this.StoreRepository = data_source_1.AppDataSource.getRepository(store_1.Store);
        this.StoreService = productService_1["default"];
    }
    return SellerService;
}());
exports["default"] = new SellerService();
