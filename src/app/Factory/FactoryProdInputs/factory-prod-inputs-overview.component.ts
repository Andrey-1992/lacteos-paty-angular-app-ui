import { Component, Input, OnInit } from '@angular/core';
import { CheeseDataStructureModel } from '../FactoryShared/CheeseDataStructure/cheese-data-structure.model';

@Component({
  selector: 'app-overview-cheese-input',
  templateUrl: './factory-prod-inputs-overview.component.html',
  styleUrls: ['./factory-prod-inputs-overview.component.css']
})

export class FactoryProdInputsOverview  implements OnInit{
  @Input() filteredRecords: any = {};
  cleanedDate:string = '';
  
  ngOnInit(): void {
    // console.log(this.filteredRecords)
      this.cleanedDate = this.filteredRecords.dateIn.slice(0, 10).split('-').join(' / ')
  }

  sendStatus = ():void => {
    event.preventDefault()
    console.log('testiong button')
    // changeViewStatus('detailedView', filteredRecords.id);
  }
};