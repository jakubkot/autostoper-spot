import { createReducer, on } from '@ngrx/store';
import {
  allSpotsLoaded,
  spotPartialsUpdated,
  spotUpdated,
} from '../spot.actions';
import { adapter } from '@domains/spot/store/entity/consts/adapter.const';
import { SpotDomainModel } from '@domains/spot/models/spot.domain.model';
import { UpdateNum } from '@ngrx/entity/src/models';

export const spotsReducer = createReducer(
  adapter.getInitialState(),
  on(allSpotsLoaded, (state, action) =>
    adapter.addMany(action.spots, {
      ...state,
      allSpotsLoaded: true,
    }),
  ),
  on(spotPartialsUpdated, (state, action) => {
    const updatedSpot: UpdateNum<SpotDomainModel> = {
      id: action.id,
      changes: action.partials,
    };

    return adapter.updateOne(updatedSpot, state);
  }),
  on(spotUpdated, (state, action) => {
    return adapter.updateOne(action.updatedSpot, state);
  }),
);
