import { Observable } from 'rxjs';
import { SpotApi } from '@api/spots-api/interfaces/spot-api.interface';
import { SpotResponse } from '@api/spots-api/interfaces/responses/spot.response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiSpots } from '../../../../environments/environment.dev';
import { ApiParams } from '@api/consts/api-params.const';
import { SpotMarkerResponse } from '@api/spots-api/interfaces/responses/spot-marker.response';
import { SpotDomainModel } from '@domains/spot/models/spot.domain.model';

@Injectable({
  providedIn: 'root',
})
export class SpotApiService implements SpotApi {
  public constructor(private readonly http: HttpClient) {}

  public spotMarkers(): Observable<SpotMarkerResponse[]> {
    const { API_HOST_URL, SPOT_MARKERS } = apiSpots;
    const url = `${API_HOST_URL}/${SPOT_MARKERS}`;

    return this.http.get<SpotMarkerResponse[]>(url);
  }

  public detail(id: number): Observable<SpotResponse> {
    const { API_HOST_URL, SPOT } = apiSpots;
    const url = `${API_HOST_URL}/${SPOT}`.replace(ApiParams.ID, String(id));

    return this.http.get<SpotResponse>(url);
  }

  public updateSpotPartials(
    id: number,
    partials: Partial<SpotDomainModel>,
  ): Observable<SpotResponse> {
    const { API_HOST_URL, SPOT } = apiSpots;
    const url = `${API_HOST_URL}/${SPOT}`.replace(ApiParams.ID, String(id));

    return this.http.patch<SpotResponse>(url, partials);
  }
}
