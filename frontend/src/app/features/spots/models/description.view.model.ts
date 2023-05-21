import { Statusable } from '@utils/interfaces/statusable';

export interface DescriptionViewModel extends Statusable {
  readonly showEditButton: boolean;
  readonly showDescriptionFormField: boolean;
  readonly showDescriptionText: boolean;
  readonly description?: string;
}
