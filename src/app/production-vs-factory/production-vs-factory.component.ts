import { Component, OnInit } from '@angular/core';
import { FactoryDynamicMenusModel } from '../Factory/FactoryShared/factory-dynamic-menus.model';

@Component({
  selector: 'app-production-vs-factory',
  template: 
  `<app-factory-dynamic-menus 
      [childMenus]="dynamicMenus" 
      [childMenuBtn]=false
    ></app-factory-dynamic-menus>`
})
export class ProductionVsFactoryComponent implements OnInit {
  dynamicMenus: FactoryDynamicMenusModel[];

  ngOnInit(): void {
    this.dynamicMenus = [
      {
        textToDisplay: 'Fabrica', 
        urlLink: '/factory-user-selection',
      },
      {
        textToDisplay: 'Distribucion', 
        urlLink: ''
      }
    ]
  }
}
