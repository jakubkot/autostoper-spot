import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Coordinates } from '@shared/map/models/coordinates';

@Injectable({
  providedIn: 'root',
})
export class QuickMapService {
  public readonly center$: Observable<Coordinates>;

  private readonly centerSource$ = new BehaviorSubject<Coordinates>(
    new Coordinates(0, 0),
  ); // @todo initial

  public constructor() {
    this.center$ = this.centerSource$.asObservable();
  }

  public center(coordinates: Coordinates): void {
    this.centerSource$.next(coordinates);
  }
}
