"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var IncorrectInfoError_1 = __importDefault(require("../../failures/IncorrectInfoError"));
var robot_1 = require("../../types/robot");
var RobotMoverEast_1 = __importDefault(require("./RobotMoverEast"));
var RobotMoverNorth_1 = __importDefault(require("./RobotMoverNorth"));
var RobotMoverSouth_1 = __importDefault(require("./RobotMoverSouth"));
var RobotMoverWest_1 = __importDefault(require("./RobotMoverWest"));
var RobotMover = (function () {
    function RobotMover() {
    }
    RobotMover.getInstance = function () {
        if (!RobotMover.instance) {
            RobotMover.instance = new RobotMover();
        }
        return RobotMover.instance;
    };
    RobotMover.prototype.move = function (direction, positions, dimensions, step) {
        try {
            switch (direction) {
                case robot_1.RobotDirection.NORTH:
                    return new RobotMoverNorth_1.default(direction, positions, dimensions, step).getNewPosition();
                case robot_1.RobotDirection.SOUTH:
                    return new RobotMoverSouth_1.default(direction, positions, dimensions, step).getNewPosition();
                case robot_1.RobotDirection.EAST:
                    return new RobotMoverEast_1.default(direction, positions, dimensions, step).getNewPosition();
                case robot_1.RobotDirection.WEST:
                    return new RobotMoverWest_1.default(direction, positions, dimensions, step).getNewPosition();
                default:
                    throw new IncorrectInfoError_1.default();
            }
        }
        catch (error) {
            throw error;
        }
    };
    return RobotMover;
}());
exports.default = RobotMover;
