"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBatch = void 0;
const faker_1 = require("@faker-js/faker");
const generateBatch = (id) => {
    faker_1.faker.seed(id);
    const day = faker_1.faker.date.weekday();
    const bakery = faker_1.faker.location.streetAddress();
    const startTime = faker_1.faker.date.anytime();
    const endTime = new Date(startTime);
    endTime.setDate(startTime.getDate() + 1);
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetter = uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
    const randomDigits = faker_1.faker.number.int({ min: 100, max: 999 });
    const batchNumber = `${randomLetter}${randomDigits}`;
    return {
        id: id,
        bakery: bakery,
        bakingDay: day,
        startTime: startTime,
        endTime: endTime,
        batchNumber: batchNumber,
    };
};
exports.generateBatch = generateBatch;
