import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SpotDetailDialogDataModel } from '@features/spots/components/spot-detail/spot-detail.dialog-data-model';
import { SpotDomainModel } from '@domains/spot/models/spot.domain.model';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { loadSpot } from '@domains/spot/store/spot.actions';
import { SpotsState } from '@domains/spot/store/entity/spots-state.interface';
import { SpotSelectors } from '@domains/spot/store/selectors';
import { SpotViewModel } from '@features/spots/models/spot.view.model';
import { Status } from '@utils/enums/status';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-spot-detail',
  templateUrl: './spot-detail.component.html',
  styleUrls: ['./spot-detail.component.scss'],
})
export class SpotDetailComponent implements OnInit {
  public readonly Status = Status;
  public readonly spotDomain$!: Observable<SpotDomainModel>;
  public spotViewModel$!: Observable<SpotViewModel>;

  public constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: SpotDetailDialogDataModel,
    public dialogRef: MatDialogRef<SpotDetailComponent>,
    private readonly store: Store,
  ) {
    this.spotDomain$ = this.store.select(SpotSelectors.selectSpot, {
      id: this.data.spotId,
    });
  }

  public ngOnInit(): void {
    this.store.dispatch(loadSpot({ id: this.data.spotId }));

    this.spotViewModel$ = this.spotDomain$.pipe(
      map((spotDomain: SpotDomainModel) => ({
        sequenceNumber: spotDomain.id,
        description: {
          value: spotDomain.description,
          status: Status.SUCCESS,
        },
      })),
    );
  }

  public close(): void {
    this.dialogRef.close();
  }
}
