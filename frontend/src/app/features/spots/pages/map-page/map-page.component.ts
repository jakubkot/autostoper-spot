import { Component, Inject, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MapOptions, Marker } from 'leaflet';
import { TILE_LAYER } from '@core/map/consts/tile-layer.const';
import { UserResponse } from '@api/users-api/interfaces/responses/user.response.interface';
import { USER_API } from '@api/users-api/tokens/user-api.token';
import { SPOT_API } from '@api/spots-api/tokens/spot-api.token';
import { Coordinates } from '@shared/map/models/coordinates';
import { UserApi } from '@api/users-api/interfaces/user-api.interface';
import { SpotApi } from '@api/spots-api/interfaces/spot-api.interface';
import { UserConverter } from '@domains/users/converters/user.converter';
import { SpotMapper } from '@domains/spot/mappers/spot.mapper';
import { Store } from '@ngrx/store';
import { SpotDomainModel } from '@domains/spot/models/spot.domain.model';
import { SpotsState } from '@domains/spot/store/entity/spots-state.interface';
import { SpotSelectors } from '@domains/spot/store/selectors';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
})
export class MapPageComponent implements OnInit {
  public markers$!: Observable<Marker[]>;
  public clusteredMarkers$!: Observable<Marker[]>;
  public mapOptions!: MapOptions;

  public constructor(
    @Inject(USER_API) private readonly userApi: UserApi,
    @Inject(SPOT_API) private readonly spotApi: SpotApi,
    private readonly userConverter: UserConverter,
    private readonly spotMapper: SpotMapper,
    private readonly store: Store,
  ) {}

  public ngOnInit(): void {
    console.log('MapPageComponent');
    this.configureMap();
  }

  private configureMap(): void {
    this.configureMapOptions();
    this.configureMarkers();
    this.configureMarkerCluster();
  }

  private configureMapOptions(): void {
    this.mapOptions = {
      layers: [TILE_LAYER],
      center: new Coordinates(50, 20),
      zoom: 10,
      minZoom: 2,
      zoomControl: false,
    };
  }

  private configureMarkers(): void {
    const userMarkers$ = this.getUserMarkers$();

    this.markers$ = userMarkers$;
  }

  private configureMarkerCluster(): void {
    this.clusteredMarkers$ = this.getSpotMarkers$();
  }

  private getSpotMarkers$(): Observable<Marker[]> {
    return this.store
      .select(SpotSelectors.selectAllSpots)
      .pipe(
        map((domains: SpotDomainModel[]) =>
          this.spotMapper.domainsToLeafletMarkers(domains),
        ),
      );
  }

  private getUserMarkers$(): Observable<Marker[]> {
    return this.userApi
      .list()
      .pipe(
        map((responses: UserResponse[]) =>
          this.userConverter.responseListToLeafletMarkerList(responses),
        ),
      );
  }
}
