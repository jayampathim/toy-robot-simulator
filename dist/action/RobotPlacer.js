"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var IncorrectInfoError_1 = __importDefault(require("../failures/IncorrectInfoError"));
var InsufficientInfoError_1 = __importDefault(require("../failures/InsufficientInfoError"));
var robot_1 = require("../types/robot");
var RobotPlacer = (function () {
    function RobotPlacer() {
    }
    RobotPlacer.getInstance = function () {
        if (!RobotPlacer.instance) {
            RobotPlacer.instance = new RobotPlacer();
        }
        return RobotPlacer.instance;
    };
    RobotPlacer.prototype.parseInput = function (placement) {
        try {
            var _placement = placement.split(',').map(function (p) { return p.trim(); });
            if (_placement.length < 3)
                throw new InsufficientInfoError_1.default();
            if (isNaN(parseInt(_placement[0])) ||
                isNaN(parseInt(_placement[0])) ||
                !Object.values(robot_1.RobotDirection).includes(_placement[2]))
                throw new IncorrectInfoError_1.default();
            return {
                positions: { x: parseInt(_placement[0]), y: parseInt(_placement[1]) },
                direction: _placement[2],
            };
        }
        catch (error) {
            throw error;
        }
    };
    return RobotPlacer;
}());
exports.default = RobotPlacer;
