"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NoHistoryError_1 = __importDefault(require("../failures/NoHistoryError"));
var RobotHistory = (function () {
    function RobotHistory(robot) {
        this.states = [];
        this.robot = robot;
    }
    RobotHistory.prototype.backup = function () {
        this.states.push(this.robot.backup());
    };
    RobotHistory.prototype.undo = function () {
        if (!this.states.length)
            throw new NoHistoryError_1.default();
        ;
        var lastState = this.states.pop();
        this.robot.restore(lastState);
    };
    RobotHistory.prototype.getAll = function () {
        return this.states;
    };
    RobotHistory.prototype.isEmpty = function () {
        return this.states.length === 0;
    };
    return RobotHistory;
}());
exports.default = RobotHistory;
