"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var RobotRequiredError_1 = __importDefault(require("../failures/RobotRequiredError"));
var RobotState = (function () {
    function RobotState(robot) {
        if (!robot)
            throw new RobotRequiredError_1.default();
        this.state = {
            positions: robot.getPosition(),
            direction: robot.getDirection(),
        };
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }
    RobotState.prototype.getState = function () {
        return this.state;
    };
    RobotState.prototype.getDate = function () {
        return this.date;
    };
    return RobotState;
}());
exports.default = RobotState;
