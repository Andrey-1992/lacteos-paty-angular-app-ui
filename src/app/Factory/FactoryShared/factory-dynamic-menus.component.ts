import { Component, Input } from '@angular/core';
import { FactoryDynamicMenusModel } from './factory-dynamic-menus.model';

@Component({
  selector: 'app-factory-dynamic-menus',
  templateUrl: './factory-dynamic-menus.component.html',
  styleUrls: ['./factory-dynamic-menus.component.css']
})
export class FactoryDynamicMenus {
  @Input('childMenus') dynamicMenus: FactoryDynamicMenusModel[];
  @Input('childMenuBtn') menuBtn: boolean;
  @Input('childMenuBtnText') menuBtnText?: string;
  @Input('childMenuBtnUrl') menuBtnUrl?: string;
}