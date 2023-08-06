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

// @Component({
//   selector: 'app-production-vs-factory',
//   template: 
//   `<app-factory-dynamic-menus 
//       *ngFor="let menu of dynamicMenus"
//       [childMenu]="menu" 
//       [childMenuBtn]=false
//     ></app-factory-dynamic-menus>`
// })
// export class ProductionVsFactoryComponent implements OnInit {
//   dynamicMenus: FactoryDynamicMenusModel[];

//   ngOnInit(): void {
//     this.dynamicMenus = [
//       {
//         textToDisplay: 'Fabrica', 
//         urlLink: '/factory-user-selection',
//         cssClass: ''
//       },
//       {
//         textToDisplay: 'Distribucion', 
//         urlLink: '',
//         cssClass: ''
//       }
//     ]
//   }
// }