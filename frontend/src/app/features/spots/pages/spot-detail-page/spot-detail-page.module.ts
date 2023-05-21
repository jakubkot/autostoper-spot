import { NgModule } from '@angular/core';
import { SpotDetailPageRoutingModule } from './spot-detail-page-routing.module';
import { SpotDetailPageComponent } from './spot-detail-page.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { SpotsModule } from '@features/spots/spots.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    SpotDetailPageRoutingModule,
    SharedModule,
    SpotsModule,
    RouterModule,
    MaterialModule,
    // BrowserModule,
    // BrowserAnimationsModule,
  ],
  declarations: [SpotDetailPageComponent],
})
export class SpotDetailPageModule {}
