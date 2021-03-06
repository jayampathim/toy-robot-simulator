"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseError = (function (_super) {
    __extends(BaseError, _super);
    function BaseError(message, name, status) {
        if (message === void 0) { message = ''; }
        if (name === void 0) { name = 'Error'; }
        if (status === void 0) { status = 500; }
        var _this = _super.call(this, message) || this;
        _this.status = status;
        _this.name = name;
        return _this;
    }
    return BaseError;
}(Error));
exports.default = BaseError;
