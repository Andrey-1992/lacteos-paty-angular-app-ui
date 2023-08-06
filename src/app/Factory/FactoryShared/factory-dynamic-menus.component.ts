import { Component } from '@angular/core';
import { FactoryDynamicMenusModel } from './factory-dynamic-menus.model';

@Component({
  selector: 'app-factory-dynamic-menus',
  templateUrl: './factory-dynamic-menus.component.html',
  styleUrls: ['./factory-dynamic-menus.component.css']
})
export class FactoryDynamicMenus {
  private dynamicMenus: FactoryDynamicMenusModel[];
}