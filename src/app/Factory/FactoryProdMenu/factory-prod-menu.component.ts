import { Component, OnInit } from '@angular/core';
import { DataHandlingService } from '../FactoryShared/FactoryProdDatastorage/factory-prod-data-handling.service';


@Component({
  selector: 'app-factory-prod-menu',
  templateUrl: './factory-prod-menu.component.html',
  styleUrls: ['./factory-prod-menu.component.css']
})
export class FactoryProdMenu implements OnInit{

  constructor(private dataHandlingService: DataHandlingService) {}
  
  filterData: {cheeseName: '', piecesNo: 0}[] = [];
  fetchedData: boolean = false;

  dateObj = new Date();
  dateArray = this.dateObj.toString().split(' ');
  todaysDate = this.dateArray.splice(1, 3).join(' / ');

  ngOnInit(): void {
    this.filterData = this.dataHandlingService.filterCheeseDataByDate();
    if (this.filterData.length > 0) {
      this.fetchedData = true;
    }
  };
}