"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NoRobotsOnTableError_1 = __importDefault(require("../failures/NoRobotsOnTableError"));
var RobotNotFoundError_1 = __importDefault(require("../failures/RobotNotFoundError"));
var Table = (function () {
    function Table(_a) {
        var dimensions = _a.dimensions, isSafeMode = _a.isSafeMode;
        this.dimensions = { x: 5, y: 5 };
        this.isSafeMode = true;
        this.robots = [];
        this.dimensions = dimensions;
        this.isSafeMode = isSafeMode;
        this.currentRobot = this.robots[this.robots.length - 1];
    }
    Table.prototype.place = function (robot) {
        if (robot)
            this.currentRobot = robot;
        return this;
    };
    Table.prototype.at = function (comamnd) {
        this.currentRobot.setDimensions(this.dimensions).setSafeMode(this.isSafeMode).place(comamnd);
    };
    Table.prototype.addRobot = function (robot) {
        this.robots.push(robot);
        this.currentRobot = robot;
        return this;
    };
    Table.prototype.getRobot = function (number) {
        if (!this.robots || !this.robots.length)
            throw new NoRobotsOnTableError_1.default();
        if (number && (number < 0 || number > this.robots.length))
            throw new RobotNotFoundError_1.default();
        if (number)
            return this.robots[number - 1];
        return this.currentRobot;
    };
    return Table;
}());
exports.default = Table;
