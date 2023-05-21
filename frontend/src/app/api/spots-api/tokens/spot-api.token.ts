import { InjectionToken } from '@angular/core';
import { SpotApi } from '@api/spots-api/interfaces/spot-api.interface';

export const SPOT_API: InjectionToken<SpotApi> = new InjectionToken<SpotApi>(
  'SPOT_API',
);
