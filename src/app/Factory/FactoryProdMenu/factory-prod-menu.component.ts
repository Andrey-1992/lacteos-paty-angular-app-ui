import { Component } from '@angular/core';

@Component({
  selector: 'app-factory-prod-menu',
  templateUrl: './factory-prod-menu.component.html',
  styleUrls: ['./factory-prod-menu.component.css']
})
export class FactoryProdMenu {
  cheeseUrl: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShezzrcP_kQ2aqlw0AgJqSi2UWDekCbm3JNQ&usqp=CAU";
  dateObj = new Date();
  dateArray = this.dateObj.toString().split(' ');
  todaysDate = this.dateArray.splice(1, 3).join(' / ')
}