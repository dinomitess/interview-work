"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWords = void 0;
var findWords = function (inputString, dictionary) {
    if (!inputString || !dictionary.length) {
        return [];
    }
    var words = [];
    var inputStrCharCount = {};
    inputString.split('').forEach(function (char) {
        inputStrCharCount[char] = !!inputStrCharCount[char] ? inputStrCharCount[char] + 1 : 1;
    });
    dictionary.forEach(function (str) {
        if (!str) {
            return;
        }
        var charCounter = structuredClone(inputStrCharCount);
        var validWord = true;
        str.split('').forEach(function (char) {
            if (!charCounter[char]) {
                validWord = false;
            }
            else {
                charCounter[char]--;
            }
        });
        if (validWord) {
            words.push(str);
        }
    });
    return words;
};
exports.findWords = findWords;
