"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var figlet_1 = __importDefault(require("figlet"));
var Logger = (function () {
    function Logger() {
    }
    Logger.color = function (color) {
        Logger._color = color;
        return this;
    };
    Logger.log = function (message) {
        if (!Logger._color) {
            console.log(message);
            return;
        }
        console.log(Logger._color(message));
    };
    Logger.info = function (message) {
        Logger.newLine(2);
        console.log(chalk_1.default.green(message));
        Logger.newLine();
    };
    Logger.success = function (message) {
        Logger.newLine(2);
        console.log(chalk_1.default.black.bgGreen(message));
        Logger.newLine();
    };
    Logger.error = function (message) {
        Logger.newLine(2);
        console.log(chalk_1.default.white.bgRed(message));
        Logger.newLine();
    };
    Logger.newLine = function (count) {
        count = count || 1;
        var lines = new Array(count).fill('\n');
        console.log(lines.join(''));
    };
    Logger.printTitle = function (message) {
        Logger._color = chalk_1.default.cyan;
        Logger.log(figlet_1.default.textSync(message, {
            font: 'Big',
            horizontalLayout: 'default',
            verticalLayout: 'default',
        }));
    };
    Logger.printTable = function (columns) {
        console.table(columns);
    };
    Logger._color = null;
    return Logger;
}());
exports.default = Logger;
