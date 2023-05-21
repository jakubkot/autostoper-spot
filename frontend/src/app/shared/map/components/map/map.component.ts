import { Component, Input, OnInit, Optional } from '@angular/core';
import { MapOptions, Marker } from 'leaflet';
import { QuickMapService } from '@shared/map/services/quick-map.service';
import { Coordinates } from '@shared/map/models/coordinates';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  @Input() public options!: MapOptions;
  @Input() public markers!: Marker[];
  @Input() public markerCluster!: Marker[];

  public center$?: Observable<Coordinates>;

  public constructor(private readonly quickMapService: QuickMapService) {}

  public ngOnInit(): void {
    this.listenCenter();
  }

  private listenCenter(): void {
    this.center$ = this.quickMapService.center$;
  }
}
