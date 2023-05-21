import { faker } from "@faker-js/faker";
import { SpotResponse } from "@models/spot.response";
import { random } from "lodash";

export const generateSpots = (quantity: number): SpotResponse[] => {
  return Array.from({ length: quantity }).map((_, index) => {
    const id = index + 1;
    const latitude = Number(faker.address.latitude(53, 47));
    const longitude = Number(faker.address.longitude(23, 17));
    const address = faker.lorem.paragraph(1);
    const description = faker.lorem.paragraph();
    const photos = Array.from({ length: random(0, 5) }).map(() =>
      faker.image.city(600, 400, true)
    );
    const comments: any[] = [];
    const rate = random(0, 5, true);

    return {
      id,
      latitude,
      longitude,
      address,
      description,
      photos,
      comments,
      rate,
    };
  });
};
