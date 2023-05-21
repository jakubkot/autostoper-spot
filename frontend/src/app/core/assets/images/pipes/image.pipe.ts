import { Pipe, PipeTransform } from '@angular/core';
import { ImageProvider } from '@core/assets/images/providers/image.provider';
import { Image } from '@core/assets/images/enums/image.enum';

@Pipe({
  name: 'Image',
})
export class ImagePipe implements PipeTransform {
  public constructor(private readonly imageProvider: ImageProvider) {}

  public transform(image: Image): string {
    return this.imageProvider.getPath(image);
  }
}
