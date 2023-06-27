"use strict";
exports.__esModule = true;
exports.userAuth = void 0;
var userAuth = function (req, res, next) {
    if (req.decode.role === 'user') {
        next();
    }
    else {
        res.status(401).send('Unauthorized');
    }
};
exports.userAuth = userAuth;
