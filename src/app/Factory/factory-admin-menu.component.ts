import { Component } from '@angular/core';
import { FactoryDynamicMenusModel } from '../Factory/FactoryShared/factory-dynamic-menus.model';

@Component({
  selector: 'app-factory-admin-login',
  template: 
  ` <app-factory-dynamic-menus 
      [childMenus]="dynamicMenus" 
      [childMenuBtn]=true
      [childMenuBtnText]="menuBtnText"
      [childMenuBtnUrl]="menuBtnUrl"
    ></app-factory-dynamic-menus>
  `
})
export class FactoryMenu {
  dynamicMenus: FactoryDynamicMenusModel[];
  menuBtnText = "Menu Anterior";
  menuBtnUrl = "/factory-user-selection";

  ngOnInit(): void {
    this.dynamicMenus = [
      {
        textToDisplay: 'Produccion', 
        urlLink: '/factory-prod',
      },
      {
        textToDisplay: 'Inventario', 
        urlLink: ''
      }
    ]
  }
}