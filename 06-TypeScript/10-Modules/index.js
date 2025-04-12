"use strict";
//Exporting from a Module
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = void 0;
exports.add = add;
exports.default = logMessage;
// mathUtils.ts
function add(a, b) {
    return a + b;
}
exports.PI = 3.14;
//Importing from a Module
// app.ts
var mathUtils_1 = require("./mathUtils");
console.log((0, mathUtils_1.add)(5, 3)); // 8
console.log(exports.PI); // 3.14
// Default Export
// logger.ts
function logMessage(message) {
    console.log("Log:", message);
}
// app.ts
var logger_1 = require("./logger");
(0, logger_1.default)("Arif is learning modules!");
