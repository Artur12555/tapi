"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const generateBread_1 = require("./dataGenerators/generateBread");
const numberOfBreads = 10;
const breads = [];
for (let i = 1; i <= numberOfBreads; i++) {
    breads.push((0, generateBread_1.generateBread)(i));
}
const data = JSON.stringify(breads, null, 2);
const directoryPath = 'data/breads';
const filePath = path_1.default.join(directoryPath, 'breadData.json');
if (!fs_1.default.existsSync(directoryPath)) {
    fs_1.default.mkdirSync(directoryPath, { recursive: true });
}
fs_1.default.writeFileSync(filePath, data);
console.log(`Generated and saved data for ${numberOfBreads} breads to ${filePath}`);
