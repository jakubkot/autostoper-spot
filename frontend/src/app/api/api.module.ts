import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersApiModule } from '@api/users-api/users-api.module';
import { SpotsApiModule } from '@api/spots-api/spots-api.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  exports: [SpotsApiModule, UsersApiModule],
})
export class ApiModule {}
