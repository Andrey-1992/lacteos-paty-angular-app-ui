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
        textToDisplay: 'Buscar Reporte', 
        urlLink: '/factory-prod',
      },
      {
        textToDisplay: 'Crear Reporte', 
        urlLink: ''
      },
      {
        textToDisplay: 'Crear Nota', 
        urlLink: ''
      }
    ]
  }
}