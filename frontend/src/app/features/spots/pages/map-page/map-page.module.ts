import { NgModule } from '@angular/core';
import { MapPageRoutingModule } from './map-page-routing.module';
import { MapPageComponent } from './map-page.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { SpotsResolver } from '@features/spots/resolvers/spots.resolver';
import { DialogModule } from 'primeng/dialog';
import { SpotsModule } from '@features/spots/spots.module';
import { MaterialModule } from '@shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MapPageRoutingModule,
    DialogModule,
    SpotsModule,
    SharedModule,
    MaterialModule,
  ],
  declarations: [MapPageComponent],
  providers: [SpotsResolver],
  exports: [MapPageComponent],
})
export class MapPageModule {}
