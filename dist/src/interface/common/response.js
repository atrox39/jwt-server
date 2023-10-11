"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorStatus = exports.SuccessStatus = void 0;
var SuccessStatus;
(function (SuccessStatus) {
    SuccessStatus[SuccessStatus["SUCCESS"] = 200] = "SUCCESS";
    SuccessStatus[SuccessStatus["CREATED"] = 201] = "CREATED";
})(SuccessStatus || (exports.SuccessStatus = SuccessStatus = {}));
;
var ErrorStatus;
(function (ErrorStatus) {
    ErrorStatus[ErrorStatus["BADREQUEST"] = 400] = "BADREQUEST";
    ErrorStatus[ErrorStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
})(ErrorStatus || (exports.ErrorStatus = ErrorStatus = {}));
;
;
;
