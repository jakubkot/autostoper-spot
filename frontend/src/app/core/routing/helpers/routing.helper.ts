import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { RouteParamNotFoundException } from '@core/routing/exceptions/route-param-not-found.exception';

@Injectable({
  providedIn: 'root',
})
export class RoutingHelper {
  public getParam(activatedRoute: ActivatedRoute, paramName: string): string {
    return this.getParamFromSnapshot(activatedRoute.snapshot, paramName);
  }

  public getParamFromSnapshot(
    snapshot: ActivatedRouteSnapshot,
    paramName: string,
  ): string {
    const param: string | null = snapshot.paramMap.get(paramName);

    if (param) {
      return param;
    }

    if (snapshot.parent) {
      return this.getParamFromSnapshot(snapshot.parent, paramName);
    }

    throw new RouteParamNotFoundException(paramName);
  }
}
