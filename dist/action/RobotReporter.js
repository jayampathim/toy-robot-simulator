"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RobotReporter = (function () {
    function RobotReporter() {
    }
    RobotReporter.getInstance = function () {
        if (!RobotReporter.instance) {
            RobotReporter.instance = new RobotReporter();
        }
        return RobotReporter.instance;
    };
    RobotReporter.prototype.report = function (positions, direction) {
        return Object.values(positions).join(',') + "," + direction;
    };
    return RobotReporter;
}());
exports.default = RobotReporter;
