"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.breadsRouter = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const generateBread_1 = require("../dataGenerators/generateBread");
exports.breadsRouter = express_1.default.Router();
/**
 * @swagger
 * /bread/notFile/{id}:
 *   get:
 *     summary: Bread by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Bread ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: This Bread data
 */
exports.breadsRouter.get('/notFile/:id', (req, res) => {
    const breadID = req.params.id;
    const fakeBread = (0, generateBread_1.generateBread)(breadID);
    res.send(fakeBread);
});
/**
 * @swagger
 * /bread/file/{id}:
 *   get:
 *     summary: Get a Bread by ID from file
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Bread ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: This Bread data from file
 */
exports.breadsRouter.get('/file/:id', (req, res) => {
    const filePath = path_1.default.join('./', 'data', 'breadData.json');
    const rawData = fs_1.default.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(rawData);
    const id = req.params.id;
    const bread = data.find((bread) => bread.id === Number(id));
    res.send(bread);
});
/**
 * @swagger
 * /bread/all/file:
 *   get:
 *     summary: Get all Breads from file
 *     responses:
 *       200:
 *         description: This all are Breads we bake
 */
exports.breadsRouter.get('/all/file', (req, res) => {
    const filePath = path_1.default.join('./', 'data', 'breadData.json');
    const rawData = fs_1.default.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(rawData);
    res.send(data);
});
