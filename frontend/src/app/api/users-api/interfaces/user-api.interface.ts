import { Observable } from 'rxjs';
import { UserResponse } from '@api/users-api/interfaces/responses/user.response.interface';

export interface UserApi {
  list(): Observable<UserResponse[]>;

  isUserLoginAvailable(login: string): Observable<boolean>;
}
