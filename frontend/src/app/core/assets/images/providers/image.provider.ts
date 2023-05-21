import { Injectable } from '@angular/core';
import { Image } from '@core/assets/images/enums/image.enum';

@Injectable({
  providedIn: 'root',
})
export class ImageProvider {
  private readonly IMAGES_ROOT_PATH = '/assets/images/';

  public getPath(name: Image): string {
    return [this.IMAGES_ROOT_PATH, name].join('');
  }
}
