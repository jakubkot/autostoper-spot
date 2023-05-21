import { Observable, of } from 'rxjs';
import { UserApi } from '@api/users-api/interfaces/user-api.interface';
import { UserResponse } from '@api/users-api/interfaces/responses/user.response.interface';

export class UserApiMockService implements UserApi {
  public list(): Observable<UserResponse[]> {
    const list: UserResponse[] = [];
    // new Array(1000).fill(true).map((_, index) => {
    //   return {
    //     id: index + 1,
    //     lat: random(-90.000000, 90.00000),
    //     lng: random(-180.000000, 180.00000),
    //   };
    // });

    return of(list);
  }

  public isUserLoginAvailable(login: string): Observable<boolean> {
    const occupiedLoginList = ['test', 'jakuB', 'Admin'];

    return occupiedLoginList.includes(login) ? of(false) : of(true);
  }
}
