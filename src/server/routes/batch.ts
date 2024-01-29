import express from 'express';
import { generateBatch } from '../dataGenerators/generateBatch';
import { batchInterface } from '../interfaces/batchInterface';
import path from 'path';
import fs from 'fs';

export const batchRouter = express.Router();

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
batchRouter.get<{ id: number }, batchInterface>('/notFile/:id', (req, res) => {
  const batchID = req.params.id;
  const fakeBatch = generateBatch(batchID);

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
batchRouter.get<{ id: number }, batchInterface>('/file/:id', (req, res) => {
  const filePath = path.join('./', 'data', 'batchData.json');
  const rawData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(rawData);
  const id = req.params.id;
  const batch = data.find((batch: { id: number }) => batch.id === Number(id));

  res.send(batch);
});
