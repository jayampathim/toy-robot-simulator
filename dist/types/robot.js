"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RobotCommand = exports.RobotRotation = exports.RobotDirection = void 0;
var RobotDirection;
(function (RobotDirection) {
    RobotDirection["NORTH"] = "NORTH";
    RobotDirection["SOUTH"] = "SOUTH";
    RobotDirection["EAST"] = "EAST";
    RobotDirection["WEST"] = "WEST";
})(RobotDirection = exports.RobotDirection || (exports.RobotDirection = {}));
var RobotRotation;
(function (RobotRotation) {
    RobotRotation["LEFT"] = "LEFT";
    RobotRotation["RIGHT"] = "RIGHT";
})(RobotRotation = exports.RobotRotation || (exports.RobotRotation = {}));
var RobotCommand;
(function (RobotCommand) {
    RobotCommand["PLACE"] = "PLACE";
    RobotCommand["MOVE"] = "MOVE";
    RobotCommand["LEFT"] = "LEFT";
    RobotCommand["RIGHT"] = "RIGHT";
    RobotCommand["REPORT"] = "REPORT";
})(RobotCommand = exports.RobotCommand || (exports.RobotCommand = {}));
