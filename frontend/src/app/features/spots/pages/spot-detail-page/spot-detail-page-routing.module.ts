import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotDetailPageComponent } from './spot-detail-page.component';
const routes: Routes = [
  {
    path: '',
    component: SpotDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpotDetailPageRoutingModule {}
