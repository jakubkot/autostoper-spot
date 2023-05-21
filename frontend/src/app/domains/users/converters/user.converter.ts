import { Injectable } from '@angular/core';
import { Icon, Marker } from 'leaflet';
import { Coordinates } from '@shared/map/models/coordinates';
import { UserResponse } from '@api/users-api/interfaces/responses/user.response.interface';
import { UserModel } from '@domains/users/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserConverter {
  public responseToViewModel(response: UserResponse): UserModel {
    const { id, lng, lat } = response;

    return new UserModel({
      id,
      lng,
      lat,
    });
  }

  public responseListToLeafletMarkerList(responses: UserResponse[]): Marker[] {
    return responses.map((response: UserResponse) =>
      this.responseToLeafletMarker(response),
    );
  }

  public responseToLeafletMarker(response: UserResponse): Marker {
    const { id, lng, lat } = response;
    const coordinates = new Coordinates(lat, lng);
    const icon = new Icon({
      iconUrl: './assets/markers/marker_black.svg',
      shadowUrl: undefined,
      iconSize: [30.0, 36.21],
      shadowSize: undefined,
      iconAnchor: [15.0, 36.21],
      shadowAnchor: undefined,
      popupAnchor: undefined,
    });

    return new Marker(coordinates).setIcon(icon);
  }
}
