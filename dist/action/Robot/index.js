"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var robot_1 = require("../../types/robot");
var RobotState_1 = __importDefault(require("../RobotState"));
var Robot = (function () {
    function Robot(mover, placer, rotater, reporter) {
        this.isSafeMode = true;
        this.positions = { x: 0, y: 0 };
        this.direction = robot_1.RobotDirection.NORTH;
        this.dimensions = { x: 5, y: 5 };
        this.mover = mover;
        this.placer = placer;
        this.rotater = rotater;
        this.reporter = reporter;
    }
    Robot.prototype.setSafeMode = function (isSafeMode) {
        this.isSafeMode = isSafeMode;
        return this;
    };
    Robot.prototype.setDimensions = function (dimensions) {
        if (dimensions === void 0) { dimensions = { x: 5, y: 5 }; }
        this.dimensions = dimensions;
        return this;
    };
    Robot.prototype.getSafeMode = function () {
        return this.isSafeMode;
    };
    Robot.prototype.getPosition = function () {
        return this.positions;
    };
    Robot.prototype.getDirection = function () {
        return this.direction;
    };
    Robot.prototype.getDimensions = function () {
        return this.dimensions;
    };
    Robot.prototype.report = function () {
        try {
            return this.reporter.report(this.positions, this.direction);
        }
        catch (error) {
            throw error;
        }
    };
    Robot.prototype.place = function (placement) {
        try {
            var parsedInput = this.placer.parseInput(placement);
            this.positions = parsedInput.positions;
            this.direction = parsedInput.direction;
        }
        catch (error) {
            throw error;
        }
    };
    Robot.prototype.move = function (step) {
        try {
            this.positions = this.mover.move(this.direction, this.positions, this.dimensions, step);
        }
        catch (error) {
            throw error;
        }
    };
    Robot.prototype.rotate = function (rotation) {
        try {
            this.direction = this.rotater.rotate(this.direction, rotation);
        }
        catch (error) {
            throw error;
        }
    };
    Robot.prototype.backup = function () {
        return new RobotState_1.default(this);
    };
    Robot.prototype.restore = function (state) {
        var _state = state.getState();
        this.positions = _state.positions;
        this.direction = _state.direction;
    };
    return Robot;
}());
exports.default = Robot;
