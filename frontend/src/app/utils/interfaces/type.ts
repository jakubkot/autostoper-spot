import { DataType } from '../enums/data-type';

export interface CommonType {
  [DataType.boolean]: boolean;
  [DataType.date]: Date;
  [DataType.number]: number;
  [DataType.object]: object;
  [DataType.string]: string;
}
