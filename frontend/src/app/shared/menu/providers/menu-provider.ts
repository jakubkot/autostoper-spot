import { MenuBuilder } from '@shared/menu/builders/menu.builder';
import { MenuModel } from '@shared/menu/models/menu.model';

export abstract class MenuProvider {
  protected builder = new MenuBuilder();

  protected abstract getMenu(): MenuModel;
}
