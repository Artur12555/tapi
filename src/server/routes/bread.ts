import fs from 'fs';
import path from 'path';
import express from 'express';
import { generateBread } from '../dataGenerators/generateBread';
import { BreadInterface } from '../interfaces/breadInterface';

export const breadsRouter = express.Router();

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
breadsRouter.get<{ id: number }, BreadInterface>('/notFile/:id', (req, res) => {
  const breadID = req.params.id;
  const fakeBread = generateBread(breadID);

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
breadsRouter.get<{ id: number }, BreadInterface>('/file/:id', (req, res) => {
  const filePath = path.join('./', 'data', 'breadData.json');

  const rawData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(rawData);

  const id = req.params.id;

  const bread = data.find((bread: { id: number }) => bread.id === Number(id));

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
breadsRouter.get('/all/file', (req, res) => {
  const filePath = path.join('./', 'data', 'breadData.json');
  const rawData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(rawData);
  res.send(data);
});
