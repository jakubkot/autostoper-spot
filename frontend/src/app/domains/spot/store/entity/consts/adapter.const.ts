import { createEntityAdapter } from '@ngrx/entity';
import { SpotDomainModel } from '@domains/spot/models/spot.domain.model';

export const adapter = createEntityAdapter<SpotDomainModel>();

// export const Selectors = Adapter.getSelectors();
