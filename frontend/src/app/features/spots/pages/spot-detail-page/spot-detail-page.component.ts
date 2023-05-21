import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuickMapService } from '@shared/map/services/quick-map.service';
import { NavigateService } from '@core/navigation/services/navigate.service';
import { MatDialog } from '@angular/material/dialog';
import { SpotDetailComponent } from '@features/spots/components/spot-detail/spot-detail.component';
import { Observable } from 'rxjs';
import { Coordinates } from '@shared/map/models/coordinates';
import { RoutingPathKey } from '@core/routing/enums/routing-path-key';
import { SpotDetailDialogDataModel } from '@features/spots/components/spot-detail/spot-detail.dialog-data-model';
import { SpotDomainModel } from '@domains/spot/models/spot.domain.model';
import { Store } from '@ngrx/store';
import { RoutingParams } from '@core/routing/enums/routing-params';
import { Destroyable } from '@utils/components/destroyable.component';
import { takeUntil } from 'rxjs/operators';
import { SpotsState } from '@domains/spot/store/entity/spots-state.interface';
import { SpotSelectors } from '@domains/spot/store/selectors';

@Component({
  selector: 'app-spot-detail-page',
  templateUrl: './spot-detail-page.component.html',
  styleUrls: ['./spot-detail-page.component.scss'],
})
export class SpotDetailPageComponent extends Destroyable implements OnInit {
  private readonly spotId!: number;
  private readonly spotDomain$!: Observable<SpotDomainModel>;

  public constructor(
    private readonly dialog: MatDialog,
    private readonly activatedRoute: ActivatedRoute,
    private readonly quickMapService: QuickMapService,
    private readonly navigateService: NavigateService,
    private readonly store: Store,
  ) {
    super();
    this.spotId = Number(
      this.activatedRoute.snapshot.paramMap.get(RoutingParams.ID),
    );
    this.spotDomain$ = this.store.select(SpotSelectors.selectSpot, {
      id: this.spotId,
    });
  }

  public ngOnInit(): void {
    this.openDialog();
    this.centerMap();
  }

  private openDialog(): void {
    this.dialog
      .open<SpotDetailComponent, SpotDetailDialogDataModel>(
        SpotDetailComponent,
        {
          data: {
            spotId: this.spotId,
          },
          width: '80%',
          height: '80%',
        },
      )
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: () => this.navigateToMapPage(),
      });
  }

  private navigateToMapPage(): void {
    this.navigateService.navigate(RoutingPathKey.ROOT);
  }

  private centerMap(): void {
    this.spotDomain$.subscribe({
      next: (spotDomain) => {
        const { longitude, latitude } = spotDomain;
        const coordinates = new Coordinates(latitude!, longitude!);

        this.quickMapService.center(coordinates);
      },
    });
  }
}
