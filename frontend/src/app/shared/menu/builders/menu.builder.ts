import { MenuItemModel } from '@shared/menu/models/menu-item.model';
import { MenuModel } from '@shared/menu/models/menu.model';
import { ItemsType } from '@shared/menu/enums/items-type';
import { MenuItemBuilder } from '@shared/menu/builders/menu-item.builder';

export class MenuBuilder {
  private menu!: MenuModel;

  public constructor() {
    this.reset();
  }

  public build(): MenuModel {
    if (!this.menu.itemsType) {
      throw new Error('Items Type not found.');
    }

    if (!this.menu.items) {
      throw new Error('Items not found.');
    }

    const menu = this.menu;

    this.reset();

    return menu;
  }

  public setItemsType(value: ItemsType): this {
    this.menu.itemsType = value;

    return this;
  }

  public addItem<Key>(
    item: (builder: MenuItemBuilder<Key>) => MenuItemModel<Key>,
  ): this {
    const newItemBuilderInstance = new MenuItemBuilder<Key>();

    if (!this.menu.items) {
      this.menu.items = [];
    }

    this.menu.items.push(item(newItemBuilderInstance));

    return this;
  }

  private reset(): void {
    this.menu = new MenuModel();
  }
}
