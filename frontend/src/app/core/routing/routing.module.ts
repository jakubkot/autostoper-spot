import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingPathFragments } from '@core/routing/enums/routing-path-fragments';
import { Titles } from '@core/routing/enums/titles';
import { ResolverKeys } from '@core/routing/enums/resolver-keys';
import { SpotsResolver } from '@features/spots/resolvers/spots.resolver';
import { RoutingParams } from '@core/routing/enums/routing-params';
import { SpotDetailPageComponent } from '@features/spots/pages/spot-detail-page/spot-detail-page.component';
import { AppComponent } from '@features/app/app.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    resolve: {
      [ResolverKeys.SPOTS]: SpotsResolver,
    },
    // children: [
    //   {
    // path: '',
    // loadChildren: () =>
    //   loadRemoteModule({
    //     type: 'manifest',
    //     remoteName: 'user',
    //     exposedModule: './LayoutModule',
    //   }).then((m) => m.LayoutModule),
    //   },
    // ],
    children: [
      {
        path: `${RoutingPathFragments.SPOTS}/:${RoutingParams.ID}`,
        component: SpotDetailPageComponent,
      },
      {
        path: RoutingPathFragments.NOT_FOUND,
        title: Titles.NOT_FOUND,
        loadChildren: () =>
          import('@core/pages/not-found-page/not-found-page.module').then(
            (m) => m.NotFoundPageModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class RoutingModule {}
