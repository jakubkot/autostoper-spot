import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SpotsEffects } from '@domains/spot/store/spots.effects';
import { SpotDetailComponent } from '@features/spots/components/spot-detail/spot-detail.component';
import { DescriptionComponent } from './components/description/description.component';
import { MaterialModule } from '@shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DescriptionFieldComponent } from '@features/spots/components/description-field/description-field.component';
import { spotsReducer } from '@domains/spot/store/reducers/spots.reducers';
import { PhotosComponent } from './components/photos/photos.component';

@NgModule({
  declarations: [
    SpotDetailComponent,
    DescriptionComponent,
    DescriptionFieldComponent,
    PhotosComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('spots', spotsReducer),
    EffectsModule.forFeature([SpotsEffects]),
  ], // todo 'generateSpots' to enum
  exports: [SpotDetailComponent], // usunać jesli dialog
})
export class SpotsModule {}
