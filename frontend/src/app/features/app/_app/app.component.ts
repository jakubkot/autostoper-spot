import { Component, OnInit, ViewChild } from '@angular/core';
// import { SidebarMenuProvider } from '@features/layout/providers/sidebar-menu.provider';
// import { ToolbarMenuProvider } from '@features/layout/providers/toolbar-menu.provider';
// import { MenuModel } from '@shared/menu/models/menu.model';
// import { MatSidenav } from '@angular/material/sidenav';
// import { SidebarContentService } from '@features/layout/sidebar-content.service';
// import { Observable } from 'rxjs';
// import { Router } from '@angular/router';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class {
  // public readonly opened$: Observable<boolean>;
  //
  // public sidebarMenu!: MenuModel;
  // public toolbarMenu!: MenuModel;
  //
  // public constructor(
  //   private readonly sidebarMenuProvider: SidebarMenuProvider,
  //   private readonly toolbarMenuProvider: ToolbarMenuProvider,
  //   private readonly sidebarContentService: SidebarContentService,
  //   private readonly router: Router,
  // ) {
  //   this.opened$ = this.sidebarContentService.opened$;
  // }
  //
  // public ngOnInit(): void {
  //   this.configureSidebar();
  //   this.configureToolbar();
  // }
  //
  // public close(sidenav: MatSidenav): void {
  //   sidenav.close();
  //   this.sidebarContentService.setState({ opened: false });
  //   this.router.navigate(['/']);
  // }
  //
  // private configureSidebar(): void {
  //   this.sidebarMenu = this.sidebarMenuProvider.getMenu();
  // }
  //
  // private configureToolbar(): void {
  //   this.toolbarMenu = this.toolbarMenuProvider.getMenu();
  // }
}
