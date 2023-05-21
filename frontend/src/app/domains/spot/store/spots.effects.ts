import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SPOT_API } from '@api/spots-api/tokens/spot-api.token';
import { SpotApi } from '@api/spots-api/interfaces/spot-api.interface';
import { concatMap, map } from 'rxjs';
import {
  allSpotsLoaded,
  loadAllSpots,
  loadSpot,
  spotPartialsUpdated,
  spotUpdated,
} from './spot.actions';
import { SpotMapper } from '@domains/spot/mappers/spot.mapper';
import { SpotResponse } from '@api/spots-api/interfaces/responses/spot.response';
import { SpotMarkerResponse } from '@api/spots-api/interfaces/responses/spot-marker.response';
import { UpdateNum } from '@ngrx/entity/src/models';
import { SpotDomainModel } from '@domains/spot/models/spot.domain.model';

@Injectable()
export class SpotsEffects {
  public readonly loadAllSpots$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAllSpots),
      concatMap(() => this.spotApi.spotMarkers()),
      map((responses: SpotMarkerResponse[]) =>
        this.spotMapper.spotMarkersResponsesToDomainModels(responses),
      ),
      map((domains) => allSpotsLoaded({ spots: domains })),
    );
  });

  public readonly loadSpot$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSpot),
      concatMap((props) => this.spotApi.detail(props.id)),
      map((response: SpotResponse) =>
        this.spotMapper.spotResponseToDomainModel(response),
      ),
      map((domain) => {
        const updatedSpot: UpdateNum<SpotDomainModel> = {
          id: domain.id,
          changes: domain,
        };

        return spotUpdated({ updatedSpot });
      }),
    );
  });

  public readonly spotPartialsUpdated$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(spotPartialsUpdated),
        concatMap((action) => {
          const { id, partials } = action;

          return this.spotApi.updateSpotPartials(id, partials);
        }),
      );
    },
    { dispatch: false },
  );

  public constructor(
    @Inject(SPOT_API) private readonly spotApi: SpotApi,
    private readonly actions$: Actions,
    private readonly spotMapper: SpotMapper,
  ) {}
}
