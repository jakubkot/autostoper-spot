import { Statusable } from '@utils/interfaces/statusable';

export interface PhotosViewModel extends Statusable {
  readonly url?: string;
  readonly showRemoveButton: boolean;
  readonly showAddButton: boolean;
}
