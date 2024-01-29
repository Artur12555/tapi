"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bakeryRouter = void 0;
const express_1 = __importDefault(require("express"));
const generateBakery_1 = require("../dataGenerators/generateBakery");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
exports.bakeryRouter = express_1.default.Router();
/**
 * @swagger
 * /bakery/notFile/{id}:
 *   get:
 *     summary: Bakery by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Bakery ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: This Bakery data
 */
exports.bakeryRouter.get('/notFile/:id', (req, res) => {
    const batchID = req.params.id;
    const fakeBakery = (0, generateBakery_1.generateBakery)(batchID);
    res.send(fakeBakery);
});
/**
 * @swagger
 * /bakery/file/{id}:
 *   get:
 *     summary: Get a Bakery by ID from file
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: This bakery ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: This Bakery data from file
 */
exports.bakeryRouter.get('/file/:id', (req, res) => {
    const filePath = path_1.default.join('./', 'data', 'bakeryData.json');
    const rawData = fs_1.default.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(rawData);
    const id = req.params.id;
    const bakery = data.find((bakery) => bakery.id === Number(id));
    res.send(bakery);
});
