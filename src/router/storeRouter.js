"use strict";
exports.__esModule = true;
exports.storeRouter = void 0;
var express_1 = require("express");
var storeController_1 = require("../controller/storeController");
var auth_1 = require("../middleware/auth");
exports.storeRouter = (0, express_1.Router)();
exports.storeRouter.get('/search/ID', storeController_1["default"].searchStoreWithID);
exports.storeRouter.use(auth_1.auth);
// storeRouter.use(userAuth)
exports.storeRouter.get('/storeDetail', storeController_1["default"].getStoreInformation);
exports.storeRouter.get('/storeType', storeController_1["default"].getStoreType);
exports.storeRouter.put('/edit', storeController_1["default"].updateStoreInformation);
exports.storeRouter.post('/create', storeController_1["default"].createStore);
