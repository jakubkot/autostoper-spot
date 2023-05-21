import { InjectionToken } from '@angular/core';
import { UserApi } from '@api/users-api/interfaces/user-api.interface';

export const USER_API: InjectionToken<UserApi> = new InjectionToken<UserApi>(
  'USER_API',
);
