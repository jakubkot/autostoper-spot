import { Component, Inject, Input } from '@angular/core';
import { MaterialIcons } from '@shared/material/icons/icons.enum';
import { SPOT_API } from '@api/spots-api/tokens/spot-api.token';
import { SpotApi } from '@api/spots-api/interfaces/spot-api.interface';
import { SpotDomainModel } from '@domains/spot/models/spot.domain.model';
import { spotPartialsUpdated } from '@domains/spot/store/spot.actions';
import { Store } from '@ngrx/store';
import { DescriptionViewModel } from '@features/spots/models/description.view.model';
import { Status } from '@utils/enums/status';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent {
  public readonly ICONS = MaterialIcons;

  public descriptionView: DescriptionViewModel = {
    showEditButton: false,
    showDescriptionFormField: false,
    showDescriptionText: false,
    status: Status.PENDING,
  };

  private _spotDomain!: SpotDomainModel;

  public constructor(
    @Inject(SPOT_API) private readonly spotApi: SpotApi,
    private readonly store: Store,
  ) {}

  public get spotDomain(): SpotDomainModel {
    return this._spotDomain;
  }

  @Input() public set spotDomain(value: SpotDomainModel) {
    this._spotDomain = value;

    this.configureDescriptionView();
  }

  public handleSaveEvent(value: string): void {
    this.updateDescription(value);
  }

  public handleCancelEvent(): void {
    this.triggerEditing(false);
  }

  public triggerEditing(editing: boolean): void {
    if (editing) {
      this.descriptionView = {
        ...this.descriptionView,
        showEditButton: false,
        showDescriptionFormField: true,
        showDescriptionText: false,
      };
    } else {
      this.descriptionView = {
        ...this.descriptionView,
        showEditButton: true,
        showDescriptionFormField: false,
        showDescriptionText: true,
      };
    }
  }

  private configureDescriptionView(): void {
    this.descriptionView = {
      showEditButton: !!this.spotDomain.description,
      showDescriptionFormField: false,
      showDescriptionText: true,
      status: Status.SUCCESS,
    };
  }

  private updateDescription(value: string): void {
    this.store.dispatch(
      spotPartialsUpdated({
        id: this.spotDomain.id,
        partials: { description: value },
      }),
    );
    this.triggerEditing(false);
  }
}
