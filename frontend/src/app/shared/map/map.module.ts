import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './components/map/map.component';
import { InitialResizeDirective } from './directives/initial-resize.directive';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';

@NgModule({
  declarations: [MapComponent, InitialResizeDirective],
  imports: [CommonModule, LeafletModule, LeafletMarkerClusterModule],
  exports: [MapComponent],
})
export class MapModule {}
