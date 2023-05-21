import { Component, Input, ViewChild } from '@angular/core';
import { MenuItemModel } from '@shared/menu/models/menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input() public item!: MenuItemModel;
  @ViewChild('childMenu') public childMenu: any;
}
