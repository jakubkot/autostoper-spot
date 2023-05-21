import { Component, Input } from '@angular/core';
import { MenuModel } from '@shared/menu/models/menu.model';
import { ItemsType } from '@shared/menu/enums/items-type';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent<Key> {
  @Input() public menu!: MenuModel;

  public get isItemsTypeButtons(): boolean {
    return this.menu.itemsType === ItemsType.BUTTON_ITEMS;
  }

  public get isItemsTypeList(): boolean {
    return this.menu.itemsType === ItemsType.LIST_ITEMS;
  }
}
