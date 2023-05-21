import { MenuItemModel } from '@shared/menu/models/menu-item.model';
import { MaterialIcons } from '@shared/material/icons/icons.enum';

export class MenuItemBuilder<Key> {
  private menuItem!: MenuItemModel<Key>;

  public constructor() {
    this.reset();
  }

  public build(): MenuItemModel<Key> {
    if (!this.menuItem.key) {
      throw new Error('Key not found.');
    }

    if (!this.menuItem.label) {
      throw new Error('Label not found.');
    }

    const menuItem = this.menuItem;

    this.reset();

    return menuItem;
  }

  public setKey(value: Key): this {
    this.menuItem.key = value;

    return this;
  }

  public setLabel(value: string): this {
    this.menuItem.label = value;

    return this;
  }

  public setRouterLink(value: string[]): this {
    this.menuItem.routerLink = value;

    return this;
  }

  public setIcon(value: MaterialIcons): this {
    this.menuItem.icon = value;

    return this;
  }

  public setChildren(
    children: (builder: MenuItemBuilder<Key>) => MenuItemModel<Key>[],
  ): this {
    const newBuilderInstance = new MenuItemBuilder<Key>();

    this.menuItem.items = children(newBuilderInstance);

    return this;
  }

  private reset(): void {
    this.menuItem = new MenuItemModel();
  }
}
