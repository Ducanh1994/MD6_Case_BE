"use strict";
exports.__esModule = true;
exports.staffAuth = void 0;
var staffAuth = function (req, res, next) {
    if (req.decode.role === 'staff') {
        next();
    }
    else {
        // res.status(401).send('Unauthorized');
    }
};
exports.staffAuth = staffAuth;
