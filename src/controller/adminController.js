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
var adminService_1 = require("../service/adminService");
var staffService_1 = require("../service/staffService");
var AdminController = /** @class */ (function () {
    function AdminController() {
        var _this = this;
        this.createStaff = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var userCheck, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 9]);
                        return [4 /*yield*/, this.adminService.checkUser(req.body)];
                    case 1:
                        userCheck = _a.sent();
                        if (!(userCheck.length !== 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, res.status(406).json('The username already existed!')];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.adminService.createStaff(req.body)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, res.status(201).json('Create new user successfully!')];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        error_1 = _a.sent();
                        return [4 /*yield*/, res.status(500).json(error_1 + ' at createAccount in adminController')];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        }); };
        // Await Update For Display All User's Detail
        // Await Response For Found Entity
        this.searchAccount = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var userFound, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 5]);
                        return [4 /*yield*/, this.adminService.searchUser(req.query)];
                    case 1:
                        userFound = _a.sent();
                        return [4 /*yield*/, res.status(202).json(userFound)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        error_2 = _a.sent();
                        return [4 /*yield*/, res.status(500).json(error_2 + ' at searchAccount in adminController')];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.enablingShopAccount = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var shopStatus, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 5]);
                        return [4 /*yield*/, this.adminService.enablingShop(req.body)];
                    case 1:
                        shopStatus = _a.sent();
                        return [4 /*yield*/, res.status(201).json(shopStatus)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        error_3 = _a.sent();
                        return [4 /*yield*/, res.status(500).json(error_3 + ' at enablingShopAccount in adminController')];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.showAllAccount = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var allAccount, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 5]);
                        return [4 /*yield*/, this.adminService.showUser()];
                    case 1:
                        allAccount = _a.sent();
                        return [4 /*yield*/, res.status(202).json(allAccount)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        error_4 = _a.sent();
                        return [4 /*yield*/, res.status(500).json(error_4 + ' at showAllAccount in adminController')];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.showAllStaffs = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var staffs, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.staffService.getStaffs()];
                    case 1:
                        staffs = _a.sent();
                        res.status(202).json({
                            success: true,
                            message: 'oke',
                            data: staffs
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        res.status(500).json({
                            message: 'error in showAllStaff',
                            error: error_5,
                            success: false
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.addStaff = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var staff, message, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        staff = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.staffService.checkStaff(staff)];
                    case 2:
                        message = _a.sent();
                        if (!!message) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.staffService.addStaffs(staff)];
                    case 3:
                        _a.sent();
                        res.status(200).json({
                            success: true,
                            data: staff.id
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        res.status(200).json({
                            success: false,
                            data: message
                        });
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_6 = _a.sent();
                        res.status(500).json({
                            error: error_6,
                            success: false,
                            message: 'Error in creating Staff'
                        });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        this.PaginationStaff = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var page, page_size, data, data, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("paginationStaff", req.query);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        page = req.query.page;
                        page_size = req.query.page_size;
                        if (!page) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.staffService.paginationStaff(page, page_size)];
                    case 2:
                        data = _a.sent();
                        res.status(200).json({
                            message: "oke",
                            success: true,
                            data: data
                        });
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.staffService.getStaffs()];
                    case 4:
                        data = _a.sent();
                        res.status(200).json({
                            message: "oke",
                            success: true,
                            data: data
                        });
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_7 = _a.sent();
                        res.status(500).json({
                            message: "error at PaginationStaff",
                            success: false,
                            error: error_7
                        });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        this.adminService = adminService_1["default"];
        this.staffService = staffService_1["default"];
    }
    return AdminController;
}());
exports["default"] = new AdminController();
