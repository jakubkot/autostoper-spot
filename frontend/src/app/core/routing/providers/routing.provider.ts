import { Injectable } from '@angular/core';
import { Params, Router, UrlTree } from '@angular/router';
import { RoutingPathKey } from '@core/routing/enums/routing-path-key';
import { RoutingPathFragments } from '@core/routing/enums/routing-path-fragments';

@Injectable({
  providedIn: 'root',
})
export class RoutingProvider {
  private readonly routingPathMatrix: Record<RoutingPathKey, string[]> = {
    [RoutingPathKey.ROOT]: [RoutingPathFragments.ROOT],
    [RoutingPathKey.SETTINGS]: [RoutingPathFragments.SETTINGS],
    [RoutingPathKey.CONTACT]: [RoutingPathFragments.CONTACT],
    [RoutingPathKey.EXAMPLES__CHANGE_DETECTOR]: [
      RoutingPathFragments.EXAMPLES,
      RoutingPathFragments.CHANGE_DETECTOR,
    ],
    [RoutingPathKey.EXAMPLES__STYLES]: [
      RoutingPathFragments.EXAMPLES,
      RoutingPathFragments.STYLES,
    ],
    [RoutingPathKey.EXAMPLES__RXJS_OPERATORS__HIGHER_ORDER_MAPPING]: [
      RoutingPathFragments.EXAMPLES,
      RoutingPathFragments.RXJS_OPERATORS,
      RoutingPathFragments.HIGHER_ORDER_MAPPING,
    ],
    [RoutingPathKey.EXAMPLES__RXJS_OPERATORS__FORK_JOIN]: [
      RoutingPathFragments.EXAMPLES,
      RoutingPathFragments.RXJS_OPERATORS,
      RoutingPathFragments.FORK_JOIN,
    ],
    [RoutingPathKey.EXAMPLES__RXJS_OPERATORS__COMBINE_LATEST]: [
      RoutingPathFragments.EXAMPLES,
      RoutingPathFragments.RXJS_OPERATORS,
      RoutingPathFragments.COMBINE_LATEST,
    ],
    [RoutingPathKey.EXAMPLES__NG_ZONE]: [
      RoutingPathFragments.EXAMPLES,
      RoutingPathFragments.NG_ZONE,
    ],
    [RoutingPathKey.EXAMPLES__WORKER]: [
      RoutingPathFragments.EXAMPLES,
      RoutingPathFragments.WORKER,
    ],
    [RoutingPathKey.EXAMPLES__LIFECYCLE_HOOKS]: [
      RoutingPathFragments.EXAMPLES,
      RoutingPathFragments.LIFECYCLE_HOOKS,
    ],
    [RoutingPathKey.EXAMPLES__CUSTOM_TEMPLATE_LIST]: [
      RoutingPathFragments.EXAMPLES,
      RoutingPathFragments.CUSTOM_TEMPLATE_LIST,
    ],
    [RoutingPathKey.NOT_FOUND]: [RoutingPathFragments.NOT_FOUND],
  };

  public constructor(private readonly router: Router) {}

  public getPath(
    routingPathKey: RoutingPathKey,
    params: Params = {},
  ): string[] {
    const route: string[] = this.routingPathMatrix[routingPathKey];

    return this.getReplacedParams(route, params);
  }

  public getUrlTree(
    routingPathKey: RoutingPathKey,
    params: Params = {},
  ): UrlTree {
    return this.router.createUrlTree(this.getPath(routingPathKey, params));
  }

  private getReplacedParams(route: string[], params: Params): string[] {
    return route.map((fragment: string) =>
      params[fragment] ? params[fragment] : fragment,
    );
  }
}
