import express from 'express';
import { generateBakery } from '../dataGenerators/generateBakery';
import { bakeryInterface } from '../interfaces/bakeryInterface';
import path from 'path';
import fs from 'fs';

export const bakeryRouter = express.Router();

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
bakeryRouter.get<{ id: number }, bakeryInterface>('/notFile/:id', (req, res) => {
  const batchID = req.params.id;
  const fakeBakery = generateBakery(batchID);

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
bakeryRouter.get<{ id: number }, bakeryInterface>('/file/:id', (req, res) => {
  const filePath = path.join('./', 'data', 'bakeryData.json');
  const rawData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(rawData);
  const id = req.params.id;
  const bakery = data.find((bakery: { id: number }) => bakery.id === Number(id));

  res.send(bakery);
});
