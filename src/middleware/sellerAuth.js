"use strict";
exports.__esModule = true;
exports.sellerAuth = void 0;
var sellerAuth = function (req, res, next) {
    if (req.decode.role === 'seller') {
        next();
    }
    else {
        // res.status(401).send('Unauthorized');
        next();
    }
};
exports.sellerAuth = sellerAuth;
