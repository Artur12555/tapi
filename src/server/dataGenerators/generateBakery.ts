import { faker } from '@faker-js/faker';
import { bakeryInterface } from "../interfaces/bakeryInterface";

export const generateBakery = (id: number): bakeryInterface => {
    faker.seed(id);

    const bakery: string = faker.location.streetAddress();
    const company: string = faker.company.buzzPhrase();


    return {
        id: id,
        bakery: bakery,
        company: company,

    };
};
