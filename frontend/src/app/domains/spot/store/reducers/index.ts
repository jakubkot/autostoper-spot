// import {
//   ActionReducerMap,
//   createReducer,
//   MetaReducer,
//   on,
//   Store,
// } from '@ngrx/store';
// import { environment } from '@env';
// import { SpotResponse } from '@api/spots-api/interfaces/responses/spot.response.interface';
// import { SpotActions } from '@features/spots';
//
// export interface SpotsState {
//   list?: SpotResponse[];
// }
//
// export const initialSpotsState: SpotsState = {
//   list: undefined,
// };
//
// export const reducers: ActionReducerMap<SpotsState> = {};
//
// export const metaReducers: MetaReducer<SpotsState>[] = !environment.production
//   ? []
//   : [];
//
// export const spotsReducer = createReducer(
//   initialSpotsState,
//   on(SpotActions.getAll, (state, action) => {
//     return {
//       list: action.list,
//     };
//   }),
// );
