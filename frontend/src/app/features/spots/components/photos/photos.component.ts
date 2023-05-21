import { Component, Input } from '@angular/core';
import { SpotDomainModel } from '@domains/spot/models/spot.domain.model';
import { Status } from '@utils/enums/status';
import { PhotosViewModel } from '@features/spots/models/photos.view.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent {
  public photosView: PhotosViewModel = {
    showRemoveButton: false,
    showAddButton: false,
    status: Status.PENDING,
  };

  private _spotDomain!: SpotDomainModel;

  public get spotDomain(): SpotDomainModel {
    return this._spotDomain;
  }

  @Input() public set spotDomain(value: SpotDomainModel) {
    this._spotDomain = value;

    this.configurePhotosView();
  }

  private configurePhotosView(): void {
    this.photosView = {
      url: this.spotDomain.photos?.length
        ? this.spotDomain.photos[0]
        : undefined,
      showRemoveButton: false,
      showAddButton: false,
      status: Status.SUCCESS,
    };
  }
}
