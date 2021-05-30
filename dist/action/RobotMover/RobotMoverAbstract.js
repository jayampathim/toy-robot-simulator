"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RobotMoverAbstract = (function () {
    function RobotMoverAbstract(direction, positions, dimensions, step) {
        this.direction = direction;
        this.positions = positions;
        this.dimensions = dimensions;
        this.step = step || 1;
    }
    RobotMoverAbstract.prototype.getNewPosition = function () {
        return this.move();
    };
    return RobotMoverAbstract;
}());
exports.default = RobotMoverAbstract;
