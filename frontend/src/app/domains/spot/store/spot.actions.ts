import { createAction, props } from '@ngrx/store';
import { ngrxActionName } from '@utils/functions/ngrx-action-name';
import { SpotDomainModel } from '@domains/spot/models/spot.domain.model';
import { UpdateNum } from '@ngrx/entity/src/models';

export const loadAllSpots = createAction(
  ngrxActionName('spots resolver', 'load all spots'),
);

export const allSpotsLoaded = createAction(
  ngrxActionName('load spots effect', 'all spots loaded'),
  props<{ spots: SpotDomainModel[] }>(),
);

export const loadSpot = createAction(
  ngrxActionName('spot detail', 'load spot'),
  props<{ id: number }>(),
);

export const spotPartialsUpdated = createAction(
  ngrxActionName('spot component', 'update spot'),
  props<{ id: number; partials: Partial<SpotDomainModel> }>(),
);

export const spotUpdated = createAction(
  ngrxActionName('spot component', 'spot updated'),
  props<{ updatedSpot: UpdateNum<SpotDomainModel> }>(),
);
