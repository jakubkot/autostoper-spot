import { Injectable } from '@angular/core';
import { NavigationExtras, Params, Router } from '@angular/router';
import { RoutingProvider } from '@core/routing/providers/routing.provider';
import { RoutingPathKey } from '@core/routing/enums/routing-path-key';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  public constructor(
    private readonly routingProvider: RoutingProvider,
    private readonly router: Router,
  ) {}

  public navigate(
    routingPathKey: RoutingPathKey,
    params: Params = {},
    extras?: NavigationExtras,
  ): void {
    void this.router.navigate(
      this.routingProvider.getPath(routingPathKey, params),
      extras,
    );
  }
}
