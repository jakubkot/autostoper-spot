import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from '@core/routing/routing.module';
import { SharedModule } from '@shared/shared.module';
import { ApiModule } from '@api/api.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '@env';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppComponent } from '@features/app/app.component';
import { MapPageModule } from '@features/spots/pages/map-page/map-page.module';
import { WebComponentWrapperComponent } from '@features/web-component-wrapper/web-component-wrapper.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RoutingModule,
    SharedModule,
    ApiModule,
    // MapPageModule,
    StoreModule.forRoot(
      {
        router: routerReducer,
      },
      {
        // metaReducers, // @todo po co metaReducers?
        // runtimeChecks: {
        //   strictStateImmutability: true,
        //   strictActionImmutability: true,
        //   strictActionSerializability: true,
        //   strictStateSerializability: true,
        // },
      },
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    WebComponentWrapperComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
