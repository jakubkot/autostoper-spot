import { MenuItem } from 'primeng/api';
import { ItemsType } from '@shared/menu/enums/items-type';
import { MenuItemModel } from '@shared/menu/models/menu-item.model';

export class MenuModel implements MenuItem {
  public itemsType!: ItemsType;
  public items!: MenuItemModel[];
}
