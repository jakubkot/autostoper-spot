import { Statusable } from '@utils/interfaces/statusable';

export interface Stateful<T> extends Statusable {
  value?: T;
}
