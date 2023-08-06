import { Component, OnInit } from '@angular/core';
import { FactoryDynamicMenusModel } from '../Factory/FactoryShared/factory-dynamic-menus.model';

@Component({
  selector: 'app-production-vs-factory',
  templateUrl: './production-vs-factory.component.html',
  styleUrls: ['./production-vs-factory.component.css']
})
export class ProductionVsFactoryComponent implements OnInit {
  dynamicMenus: FactoryDynamicMenusModel[];

  ngOnInit(): void {
    this.dynamicMenus = [
      {
        textToDisplay: 'Fabrica', 
        urlLink: '/factory-user-selection',
        cssClass: ''
      },
      {
        textToDisplay: 'Distribucion', 
        urlLink: '',
        cssClass: ''
      }
    ]
  }

}
