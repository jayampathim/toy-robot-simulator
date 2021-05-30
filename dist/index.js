"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("./utils/logger"));
var Table_1 = __importDefault(require("./action/Table"));
var inquirer_1 = __importDefault(require("inquirer"));
var robot_1 = require("./types/robot");
var chalk_1 = __importDefault(require("chalk"));
var factory_1 = __importDefault(require("./action/Robot/factory"));
inquirer_1.default.registerPrompt('suggest', require('inquirer-prompt-suggest'));
var table = new Table_1.default({
    dimensions: { x: 5, y: 5 },
    isSafeMode: true,
});
var robot = factory_1.default();
var initialQuestion = [
    {
        type: 'suggest',
        name: 'command',
        message: 'Please position your robot on the table:',
        suggestions: ['PLACE 0,0,NORTH'],
        validate: function (input) {
            if (input.split(' ')[0] !== 'PLACE' || input.split(' ').length !== 2) {
                return 'Please instruct a valid command. The first command should be PLACE command. e.g. PLACE 0,0,NORTH';
            }
            table.addRobot(robot).at(input.split(' ')[1]);
            return true;
        },
    },
];
var validCommands = ['PLACE', 'MOVE', 'LEFT', 'RIGHT', 'REPORT'];
var subsequentQuestions = [
    {
        type: 'suggest',
        name: 'command',
        message: 'Please instruct your next command:',
        suggestions: validCommands,
        validate: function (input) {
            var userCommand = input.split(' ')[0];
            if (!validCommands.includes(userCommand)) {
                return "This is not a valid command.Please instruct a valid command (" + validCommands.join(', ') + ")";
            }
            try {
                switch (userCommand) {
                    case robot_1.RobotCommand.PLACE:
                        table.place(table.getRobot()).at(input.split(' ')[1]);
                        break;
                    case robot_1.RobotCommand.MOVE:
                        table.getRobot().move();
                        break;
                    case robot_1.RobotCommand.LEFT:
                        table.getRobot().rotate(robot_1.RobotRotation.LEFT);
                        break;
                    case robot_1.RobotCommand.RIGHT:
                        table.getRobot().rotate(robot_1.RobotRotation.RIGHT);
                        break;
                    case robot_1.RobotCommand.REPORT:
                        logger_1.default.success("Current position: " + table.getRobot().report());
                        break;
                }
            }
            catch (error) {
                return error.message;
            }
            return true;
        },
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Do you want to continue again?',
        default: true,
    },
];
var initialPrompt = function () {
    inquirer_1.default.prompt(initialQuestion).then(function () {
        subsequentPrompts();
    });
};
var subsequentPrompts = function () {
    inquirer_1.default.prompt(subsequentQuestions).then(function (response) {
        if (response.askAgain) {
            subsequentPrompts();
        }
    });
};
logger_1.default.newLine();
logger_1.default.color(chalk_1.default.cyan).log('These are the valid commands that you can use:\nPLACE 1,2,EAST\nLEFT\nRIGHT\nMOVE\nREPORT\n');
initialPrompt();
