import { faker } from '@faker-js/faker';
import {BreadInterface} from "../interfaces/breadInterface";


export const generateBread = (id: number) : BreadInterface => {
    faker.seed(Number(id));
    
  const priceInCents = faker.number.int({ min: 70, max: 300 });
  const price = priceInCents / 100;

  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomLetter = uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
  const randomDigits = faker.number.int({ min: 100, max: 999 });
  const batchNumber = `${randomLetter}${randomDigits}`;

    return {
        id: id,
        name: faker.commerce.productName(),
        price: price,
        batchNumber: batchNumber,
    };
}


