import { Component, OnInit } from '@angular/core';
import { FactoryDynamicMenusModel } from '../Factory/FactoryShared/factory-dynamic-menus.model';
@Component({
  selector: 'app-factory-user-selection',
  template: 
  ` <app-factory-dynamic-menus 
      [childMenus]="dynamicMenus" 
      [childMenuBtn]=true
      [childMenuBtnText]="menuBtnText"
      [childMenuBtnUrl]="menuBtnUrl"
    ></app-factory-dynamic-menus>
  `
})
export class FactoryUserSelection implements OnInit{
  dynamicMenus: FactoryDynamicMenusModel[];
  menuBtnText = "Menu Anterior";
  menuBtnUrl = "/production-vs-factory";

  ngOnInit(): void {
    this.dynamicMenus = [
      {
        textToDisplay: 'Administracion', 
        urlLink: '/factory-admin-login'
      },
      {
        textToDisplay: 'Produccion', 
        urlLink: ''
      },
      {
        textToDisplay: 'Directivos', 
        urlLink: ''
      }
    ]
  }
}