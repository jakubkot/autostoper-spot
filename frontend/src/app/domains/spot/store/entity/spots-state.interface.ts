import { EntityState } from '@ngrx/entity';
import { SpotDomainModel } from '@domains/spot/models/spot.domain.model';

export interface SpotsState extends EntityState<SpotDomainModel> {
  allSpotsLoaded: boolean;
}
