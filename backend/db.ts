import { SpotResponse } from "@models/spot.response";
import { generateSpots } from "./generate-spots";
import { SpotMarkerResponse } from "@models/spot-marker.response";

interface DB {
  spots: SpotResponse[];
  "spot-markers": SpotMarkerResponse[];
}

const spots = generateSpots(100);
const spotMarkers = spots.map((spot: SpotResponse) => {
  const { id, latitude, longitude } = spot;

  return {
    id,
    latitude,
    longitude,
  };
});

export const db: DB = {
  "spot-markers": spotMarkers,
  spots,
};
