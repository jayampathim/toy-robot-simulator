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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ForbiddenMoveError_1 = __importDefault(require("../../failures/ForbiddenMoveError"));
var RobotMoverAbstract_1 = __importDefault(require("./RobotMoverAbstract"));
var RobotMoverNorth = (function (_super) {
    __extends(RobotMoverNorth, _super);
    function RobotMoverNorth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RobotMoverNorth.prototype.move = function () {
        var positionY = this.positions.y + this.step;
        if (positionY >= this.dimensions.y)
            throw new ForbiddenMoveError_1.default();
        return __assign(__assign({}, this.positions), { y: positionY });
    };
    return RobotMoverNorth;
}(RobotMoverAbstract_1.default));
exports.default = RobotMoverNorth;
