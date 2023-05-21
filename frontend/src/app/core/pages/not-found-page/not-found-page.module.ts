import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from '@core/pages/not-found-page/not-found-page.component';
import { NotFoundPageRoutingModule } from '@core/pages/not-found-page/not-found-page-routing.module';

@NgModule({
  imports: [CommonModule, NotFoundPageRoutingModule],
  declarations: [NotFoundPageComponent],
})
export class NotFoundPageModule {}
