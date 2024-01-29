"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBread = void 0;
const faker_1 = require("@faker-js/faker");
const generateBread = (id) => {
    faker_1.faker.seed(Number(id));
    const priceInCents = faker_1.faker.number.int({ min: 70, max: 300 });
    const price = priceInCents / 100;
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetter = uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
    const randomDigits = faker_1.faker.number.int({ min: 100, max: 999 });
    const batchNumber = `${randomLetter}${randomDigits}`;
    return {
        id: id,
        name: faker_1.faker.commerce.productName(),
        price: price,
        batchNumber: batchNumber,
    };
};
exports.generateBread = generateBread;
