import fs from 'fs';
import path from 'path';
import { generateBread } from './dataGenerators/generateBread';
import { BreadInterface } from './interfaces/breadInterface';

const numberOfBreads = 10;
const breads: BreadInterface[] = [];

for (let i = 1; i <= numberOfBreads; i++) {
  breads.push(generateBread(i));
}

const data = JSON.stringify(breads, null, 2);

const directoryPath = 'data/breads';
const filePath = path.join(directoryPath, 'breadData.json');

if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath, { recursive: true });
}

fs.writeFileSync(filePath, data);

console.log(`Generated and saved data for ${numberOfBreads} breads to ${filePath}`);
