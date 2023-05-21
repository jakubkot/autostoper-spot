import { Exact } from '@utils/types/exact';

export class UserModel {
  public readonly id!: number;
  public readonly lng!: number;
  public readonly lat!: number;

  public constructor(params: Exact<UserModel>) {
    Object.assign(this, params);
  }
}
