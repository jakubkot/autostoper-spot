import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USER_API } from '@api/users-api/tokens/user-api.token';
import { UserApiMockService } from '@api/users-api/services/user-api-mock.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    {
      provide: USER_API,
      useClass: UserApiMockService,
    },
  ],
})
export class UsersApiModule { }
