"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var robot_1 = require("../types/robot");
var RobotRotater = (function () {
    function RobotRotater() {
    }
    RobotRotater.getInstance = function () {
        if (!RobotRotater.instance) {
            RobotRotater.instance = new RobotRotater();
        }
        return RobotRotater.instance;
    };
    RobotRotater.prototype.rotate = function (currentDirection, rotation) {
        try {
            var directions = [robot_1.RobotDirection.NORTH, robot_1.RobotDirection.EAST, robot_1.RobotDirection.SOUTH, robot_1.RobotDirection.WEST];
            var currentDirectionIndex = directions.indexOf(currentDirection);
            switch (rotation) {
                case robot_1.RobotRotation.LEFT:
                    currentDirectionIndex--;
                    break;
                case robot_1.RobotRotation.RIGHT:
                    currentDirectionIndex++;
                    break;
            }
            if (currentDirectionIndex < 0) {
                return robot_1.RobotDirection.WEST;
            }
            else if (currentDirectionIndex > 3) {
                return robot_1.RobotDirection.NORTH;
            }
            else {
                return directions[currentDirectionIndex];
            }
        }
        catch (error) {
            throw error;
        }
    };
    return RobotRotater;
}());
exports.default = RobotRotater;
