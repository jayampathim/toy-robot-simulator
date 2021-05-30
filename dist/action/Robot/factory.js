"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __importDefault(require("."));
var RobotMover_1 = __importDefault(require("../RobotMover"));
var RobotPlacer_1 = __importDefault(require("../RobotPlacer"));
var RobotReporter_1 = __importDefault(require("../RobotReporter"));
var RobotRotater_1 = __importDefault(require("../RobotRotater"));
var robotFactory = function (options) {
    var mover = (options === null || options === void 0 ? void 0 : options.mover) || RobotMover_1.default.getInstance();
    var placer = (options === null || options === void 0 ? void 0 : options.placer) || RobotPlacer_1.default.getInstance();
    var rotater = (options === null || options === void 0 ? void 0 : options.rotater) || RobotRotater_1.default.getInstance();
    var reporter = (options === null || options === void 0 ? void 0 : options.reporter) || RobotReporter_1.default.getInstance();
    var robot = new _1.default(mover, placer, rotater, reporter);
    return robot;
};
exports.default = robotFactory;
