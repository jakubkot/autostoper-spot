import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { filter, first, Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadAllSpots } from '@domains/spot/store/spot.actions';
import { SpotsState } from '@domains/spot/store/entity/spots-state.interface';
import { SpotSelectors } from '@domains/spot/store/selectors';

@Injectable({
  providedIn: 'root',
})
export class SpotsResolver implements Resolve<any> {
  public constructor(private readonly store: Store) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.store.select(SpotSelectors.selectAreSpotsLoaded).pipe(
      tap((areSpotsLoaded: boolean) => {
        if (areSpotsLoaded) {
          return;
        }

        this.store.dispatch(loadAllSpots());
      }),
      filter((areSpotsLoaded: boolean) => areSpotsLoaded),
      first(),
    );
  }
}
