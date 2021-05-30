"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidTimestamp = void 0;
var isValidTimestamp = function (input) {
    return /([0-9]{4}-[0-9]{2}-[0-9]{2}) ([0-9]{2}:[0-9]{2}:[0-9]{2})/g.test(input);
};
exports.isValidTimestamp = isValidTimestamp;
