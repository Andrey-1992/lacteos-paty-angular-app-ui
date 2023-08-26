import { Component } from '@angular/core';
import { FactoryDynamicMenusModel } from '../FactoryShared/factory-dynamic-menus.model';

@Component({
  selector: 'app-factory-prod-outputs-menu',
  template: 
  ` <app-factory-dynamic-menus 
      [childMenus]="dynamicMenus" 
      [childMenuBtn]=true
      [childMenuBtnText]="menuBtnText"
      [childMenuBtnUrl]="menuBtnUrl"
    ></app-factory-dynamic-menus>
  `
})

export class FactoryProdOutputsMenu {
  dynamicMenus: FactoryDynamicMenusModel[];
  menuBtnText = "Menu Produccion";
  menuBtnUrl = "/factory-prod";

  ngOnInit(): void {
    this.dynamicMenus = [
      {
        textToDisplay: 'Crear Reporte', 
        urlLink: '/factory-prod-outputs-search',
      },
      {
        textToDisplay: 'Reportes Creados', 
        urlLink: ''
      },
      {
        textToDisplay: 'Crear Nota', 
        urlLink: ''
      }
    ]
  }
}