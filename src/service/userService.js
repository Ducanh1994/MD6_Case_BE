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
var user_1 = require("../entity/user");
var data_source_1 = require("../data-source");
var bcrypt_1 = require("bcrypt");
var jsonwebtoken_1 = require("jsonwebtoken");
var auth_1 = require("../middleware/auth");
var UserService = /** @class */ (function () {
    function UserService() {
        var _this = this;
        this.createUser = function (user) { return __awaiter(_this, void 0, void 0, function () {
            var hashed, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(1);
                        return [4 /*yield*/, bcrypt_1["default"].hash(user.password, 10)];
                    case 1:
                        hashed = _a.sent();
                        newUser = new user_1.User();
                        newUser.username = user.username;
                        newUser.name = user.name;
                        newUser.email = user.email;
                        newUser.age = user.age;
                        newUser.password = hashed;
                        newUser.role = "client";
                        console.log(hashed);
                        return [4 /*yield*/, this.userRepository.save(newUser)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, newUser];
                }
            });
        }); };
        this.checkUser = function (user) { return __awaiter(_this, void 0, void 0, function () {
            var userFound, passWordCompare, payload, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({
                            where: { username: user.username },
                            relations: {
                                store: true
                            }
                        })];
                    case 1:
                        userFound = _a.sent();
                        if (!!userFound) return [3 /*break*/, 2];
                        return [2 /*return*/, 'User is not exist'];
                    case 2:
                        console.log(userFound);
                        return [4 /*yield*/, bcrypt_1["default"].compare(user.password, userFound.password)];
                    case 3:
                        passWordCompare = _a.sent();
                        if (!passWordCompare) return [3 /*break*/, 5];
                        payload = {
                            id: userFound.id,
                            username: userFound.username,
                            email: userFound.email,
                            role: userFound.role,
                            name: userFound.name,
                            age: userFound.age,
                            phoneNumber: userFound.phoneNumber,
                            address: userFound.address,
                            salary: userFound.salary,
                            idStore: userFound.store ? userFound.store.id : null,
                            image: userFound.image
                        };
                        return [4 /*yield*/, (jsonwebtoken_1["default"].sign(payload, auth_1.SECRET, {
                                expiresIn: 36000 * 10 * 100
                            }))];
                    case 4:
                        token = _a.sent();
                        payload['token'] = token;
                        return [2 /*return*/, payload];
                    case 5: return [2 /*return*/, 'Password is wrong'];
                }
            });
        }); };
        this.findAllStaff = function () { return __awaiter(_this, void 0, void 0, function () {
            var staffs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.find({
                            where: {
                                role: "staff"
                            }
                        })];
                    case 1:
                        staffs = _a.sent();
                        return [2 /*return*/, staffs];
                }
            });
        }); };
        this.checkUserSingup = function (user) { return __awaiter(_this, void 0, void 0, function () {
            var _a, findUsername, findEmail;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.userRepository.findOne({ where: { username: user.username } }),
                            this.userRepository.findOne({ where: { email: user.email } })
                        ])];
                    case 1:
                        _a = _b.sent(), findUsername = _a[0], findEmail = _a[1];
                        if (findUsername) {
                            return [2 /*return*/, 'Username already exists'];
                        }
                        if (findEmail) {
                            return [2 /*return*/, 'Email already exists'];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        }); };
        this.updateAccountService = function (updateUser) { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.save(updateUser)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1 + ' at staffUpdate in staffService');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
    return UserService;
}());
exports["default"] = new UserService();
