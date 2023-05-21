import { customModules } from '@shared/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, ...customModules],
  exports: [CommonModule, ...customModules],
})
export class SharedModule {}
//
