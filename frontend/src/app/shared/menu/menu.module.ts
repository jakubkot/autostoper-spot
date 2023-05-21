import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '@shared/menu/components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';
import { ListItemComponent } from './components/item/list-item/list-item.component';
import { MenuItemComponent } from '@shared/menu/components/item/menu-item/menu-item.component';

@NgModule({
  declarations: [MenuComponent, ListItemComponent, MenuItemComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [MenuComponent],
})
export class MenuModule {}
