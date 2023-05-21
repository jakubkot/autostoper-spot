import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapPageComponent } from './map-page.component';
import { SpotsResolver } from '@features/spots/resolvers/spots.resolver';
import { SpotDetailPageComponent } from '@features/spots/pages/spot-detail-page/spot-detail-page.component';
import { ResolverKeys } from '@core/routing/enums/resolver-keys';
import { RoutingPathFragments } from '@core/routing/enums/routing-path-fragments';
import { RoutingParams } from '@core/routing/enums/routing-params';

const routes: Routes = [
  {
    path: '',
    component: MapPageComponent,
    resolve: {
      [ResolverKeys.SPOTS]: SpotsResolver,
    },
    children: [
      {
        path: `${RoutingPathFragments.SPOTS}/:${RoutingParams.ID}`,
        component: SpotDetailPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapPageRoutingModule {}
