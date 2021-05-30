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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseError_1 = __importDefault(require("./BaseError"));
var RobotRequiredError = (function (_super) {
    __extends(RobotRequiredError, _super);
    function RobotRequiredError() {
        return _super.call(this, 'Please provide a robot', 'RobotRequiredError', 404) || this;
    }
    return RobotRequiredError;
}(BaseError_1.default));
exports.default = RobotRequiredError;
