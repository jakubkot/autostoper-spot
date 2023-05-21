import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SPOT_API } from '@api/spots-api/tokens/spot-api.token';
import { SpotApiService } from '@api/spots-api/services/spot-api.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: SPOT_API,
      useClass: SpotApiService,
    },
  ],
})
export class SpotsApiModule {}
