"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promDo_1 = require("./promDo");
const promFor_1 = require("./promFor");
const promWhile_1 = require("./promWhile");
var Promlop;
(function (Promlop) {
    Promlop.Do = promDo_1.promDo;
    Promlop.For = promFor_1.promFor;
    Promlop.While = promWhile_1.promWhile;
})(Promlop = exports.Promlop || (exports.Promlop = {}));
var promDo_2 = require("./promDo");
exports.promDo = promDo_2.promDo;
var promFor_2 = require("./promFor");
exports.promFor = promFor_2.promFor;
var promWhile_2 = require("./promWhile");
exports.promWhile = promWhile_2.promWhile;
exports.default = Promlop;
