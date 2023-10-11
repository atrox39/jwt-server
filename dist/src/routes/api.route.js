"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var response_1 = require("../interface/common/response");
var route = (0, express_1.Router)();
route.get('/status', function (req, res) {
    return res.status(200).json({
        message: 'Ok',
        status: response_1.SuccessStatus.SUCCESS,
    });
});
route.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email === 'email' && password === '123456') {
        return res.status(response_1.SuccessStatus.SUCCESS).json({
            jwt: '',
        });
    }
    return res.status(response_1.ErrorStatus.UNAUTHORIZED).json({
        message: 'Error, user or password',
        status: response_1.ErrorStatus.UNAUTHORIZED,
    });
});
exports.default = route;
