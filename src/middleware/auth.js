"use strict";
exports.__esModule = true;
exports.auth = exports.SECRET = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
exports.SECRET = '123456';
var auth = function (req, res, next) {
    var authorization = req.headers.authorization;
    if (authorization) {
        var accessToken = req.headers.authorization.split(' ')[1];
        if (accessToken) {
            jsonwebtoken_1["default"].verify(accessToken, exports.SECRET, function (err, payload) {
                if (err) {
                    res.status(401).json({
                        error: err.message,
                        message: 'You are anonymous type 1'
                    });
                }
                else {
                    req.decode = payload;
                    next();
                }
            });
        }
        else {
            res.status(401).json({
                message: 'you are anonymous 2'
            });
        }
    }
    else {
        res.status(401).json({
            message: 'You are anonymous 3'
        });
    }
};
exports.auth = auth;
