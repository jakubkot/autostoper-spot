import { MenuItem } from 'primeng/api';
import { MaterialIcons } from '@shared/material/icons/icons.enum';

export class MenuItemModel<Key = unknown> implements MenuItem {
  public key!: Key;
  public label!: string;
  public routerLink?: string[];
  public icon?: MaterialIcons;
  public items?: MenuItemModel<Key>[];
}
