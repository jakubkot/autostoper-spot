import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SpotsState } from '@domains/spot/store/entity/spots-state.interface';
import { adapter } from '@domains/spot/store/entity/consts/adapter.const';

const selectSpotsState = createFeatureSelector<SpotsState>('spots');

export const selectAllSpots = createSelector(
  selectSpotsState,
  adapter.getSelectors().selectAll,
);

export const selectAreSpotsLoaded = createSelector(
  selectSpotsState,
  (state: SpotsState) => state.allSpotsLoaded,
);

export const selectSpot = createSelector(
  selectSpotsState,
  (state: SpotsState, props: { id: number }) => state.entities[props.id]!,
);
