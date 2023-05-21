import { Injectable, NgZone } from '@angular/core';
import { Icon, Marker } from 'leaflet';
import { Router } from '@angular/router';
import { SpotResponse } from '@api/spots-api/interfaces/responses/spot.response';
import { Coordinates } from '@shared/map/models/coordinates';
import { ImageProvider } from '@core/assets/images/providers/image.provider';
import { Image } from '@core/assets/images/enums/image.enum';
import { SpotDomainModel } from '../models/spot.domain.model';
import { RoutingPathFragments } from '@core/routing/enums/routing-path-fragments';
import { SpotMarkerResponse } from '@api/spots-api/interfaces/responses/spot-marker.response';

@Injectable({
  providedIn: 'root',
})
export class SpotMapper {
  public constructor(
    private readonly router: Router,
    private readonly ngZone: NgZone,
    private readonly imageProvider: ImageProvider,
  ) {}

  public spotMarkersResponsesToDomainModels(
    responses: SpotMarkerResponse[],
  ): SpotDomainModel[] {
    return responses.map((response: SpotMarkerResponse) =>
      this.spotMarkerResponseToDomainModel(response),
    );
  }

  public spotMarkerResponseToDomainModel(
    response: SpotMarkerResponse,
  ): SpotDomainModel {
    const { id, latitude, longitude } = response;

    return {
      id,
      latitude,
      longitude,
    };
  }

  public spotResponseToDomainModel(response: SpotResponse): SpotDomainModel {
    const {
      id,
      latitude,
      longitude,
      address,
      description,
      photos,
      comments,
      rate,
    } = response;

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
  }

  public domainsToLeafletMarkers(domains: SpotDomainModel[]): Marker[] {
    return domains.map((domain: SpotDomainModel) =>
      this.domainToLeafletMarker(domain),
    );
  }

  public domainToLeafletMarker(domain: SpotDomainModel): Marker {
    const { id, latitude, longitude } = domain;
    const coordinates = new Coordinates(latitude!, longitude!);
    const icon = new Icon({
      iconUrl: this.imageProvider.getPath(Image.MARKER_BLACK),
      shadowUrl: undefined,
      iconSize: [30.0, 36.21],
      shadowSize: undefined,
      iconAnchor: [15.0, 36.21],
      shadowAnchor: undefined,
      popupAnchor: undefined,
    });

    return new Marker(coordinates).setIcon(icon).on('click', (leafletEvent) => {
      this.ngZone.run(() => this.navigateToSpotDetailPage(id));
    });
  }

  private navigateToSpotDetailPage(id: number): void {
    this.router.navigate([RoutingPathFragments.SPOTS, id]);
  }
}
