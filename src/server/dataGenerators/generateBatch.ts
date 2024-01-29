import { faker } from '@faker-js/faker';
import { batchInterface } from "../interfaces/batchInterface";

export const generateBatch = (id: number): batchInterface => {
    faker.seed(id);

    const day: string = faker.date.weekday();
    const bakery: string = faker.location.streetAddress();
    const startTime: Date = faker.date.anytime();


    const endTime: Date = new Date(startTime);
    endTime.setDate(startTime.getDate() + 1);

    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetter = uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
    const randomDigits = faker.number.int({ min: 100, max: 999 });
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
