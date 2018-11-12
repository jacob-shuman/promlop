"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function promLoop(options) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        const data = yield options.promise();
        if (data.continue)
            promLoop(options).then(() => resolve());
        else
            resolve();
    }));
}
exports.promLoop = promLoop;
function promIterate(options) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        options.index = options.index || 0;
        if (options.index >= options.promises.length)
            reject("Index over number of promises");
        else if (options.index < 0)
            reject("Index cannot be less than 0");
        else if (options.index < options.promises.length) {
            const context = yield options.promises[options.index++]({
                data: options.data,
                index: options.index
            });
            options.data = context.data;
            if (options.index < options.promises.length) {
                promIterate(options).then(() => resolve(options.data));
            }
            else {
                resolve(options.data);
            }
        }
    }));
}
exports.promIterate = promIterate;
