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
var staffService_1 = require("../service/staffService");
var StaffController = /** @class */ (function () {
    function StaffController() {
        var _this = this;
        // Await check to find all user
        this.searchAll = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var userID, searchStatus, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userID = req.query.userID;
                        return [4 /*yield*/, this.StaffService.searchStaffByID(userID)];
                    case 1:
                        searchStatus = _a.sent();
                        res.status(202).json(searchStatus);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        res.status(500).json(error_1 + ' at searchStaff in staffController');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        // Await check to find staff
        this.searchStaff = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var userID, searchStatus, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userID = req.query.userID;
                        return [4 /*yield*/, this.StaffService.searchStaffByID(userID)];
                    case 1:
                        searchStatus = _a.sent();
                        res.status(202).json(searchStatus);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        res.status(500).json(error_2 + ' at searchStaff in staffController');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        // Await check to find user
        this.staffSearchUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var userID, searchStatus, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userID = req.query.userID;
                        return [4 /*yield*/, this.StaffService.searchUserByID(userID)];
                    case 1:
                        searchStatus = _a.sent();
                        res.status(202).json(searchStatus);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        res.status(500).json(error_3 + ' at searchUser in staffController');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        // Await to update staff's information
        this.staffUpdateInfo = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var userID, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        userID = req['decode'].idUser;
                        return [4 /*yield*/, this.StaffService.searchStaffByID(userID).length];
                    case 1:
                        if (!((_a.sent()) !== 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.StaffService.staffUpdate(req.body)];
                    case 2:
                        _a.sent();
                        res.status(202).json('Staff info successfully updated!');
                        return [3 /*break*/, 4];
                    case 3:
                        res.status(202).json('Staff doesnt exists');
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_4 = _a.sent();
                        res.status(500).json(error_4 + ' at staffUpdateInfo in staffController');
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.StaffService = staffService_1["default"];
    }
    return StaffController;
}());
exports["default"] = new StaffController();
