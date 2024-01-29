"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchRouter = void 0;
const express_1 = __importDefault(require("express"));
const generateBatch_1 = require("../dataGenerators/generateBatch");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
exports.batchRouter = express_1.default.Router();
/**
 * @swagger
 * /batch/notFile/{id}:
 *   get:
 *     summary: Batch by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Batch ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: This Batch data
 */
exports.batchRouter.get('/notFile/:id', (req, res) => {
    const batchID = req.params.id;
    const fakeBatch = (0, generateBatch_1.generateBatch)(batchID);
    res.send(fakeBatch);
});
/**
 * @swagger
 * /batch/file/{id}:
 *   get:
 *     summary: Get a Batch by ID from file
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: This batch ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: This Batch data from file
 */
exports.batchRouter.get('/file/:id', (req, res) => {
    const filePath = path_1.default.join('./', 'data', 'batchData.json');
    const rawData = fs_1.default.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(rawData);
    const id = req.params.id;
    const batch = data.find((batch) => batch.id === Number(id));
    res.send(batch);
});
