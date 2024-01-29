"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBakery = void 0;
const faker_1 = require("@faker-js/faker");
const generateBakery = (id) => {
    faker_1.faker.seed(id);
    const bakery = faker_1.faker.location.streetAddress();
    const company = faker_1.faker.company.buzzPhrase();
    return {
        id: id,
        bakery: bakery,
        company: company,
    };
};
exports.generateBakery = generateBakery;
