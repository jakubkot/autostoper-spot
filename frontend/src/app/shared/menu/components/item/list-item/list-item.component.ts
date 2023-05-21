import { Component, Input } from '@angular/core';
import { MenuItemModel } from '@shared/menu/models/menu-item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() public item!: MenuItemModel;

  public panelOpenState!: boolean;
}
