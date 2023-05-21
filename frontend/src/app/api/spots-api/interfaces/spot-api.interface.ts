import { Observable } from 'rxjs';
import { SpotResponse } from '@api/spots-api/interfaces/responses/spot.response';
import { SpotMarkerResponse } from '@api/spots-api/interfaces/responses/spot-marker.response';
import { SpotDomainModel } from '@domains/spot/models/spot.domain.model';

export interface SpotApi {
  spotMarkers(): Observable<SpotMarkerResponse[]>;
  detail(id: number): Observable<SpotResponse>;
  updateSpotPartials(
    id: number,
    partials: Partial<SpotDomainModel>,
  ): Observable<SpotResponse>;
}
