import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheeseDataStructureModel } from '../FactoryShared/CheeseDataStructure/cheese-data-structure.model';

@Component({
  selector: 'app-overview-cheese-input',
  templateUrl: './factory-prod-inputs-overview.component.html',
  styleUrls: ['./factory-prod-inputs-overview.component.css']
})

export class FactoryProdInputsOverview  implements OnInit{
  @Input() filteredRecords: CheeseDataStructureModel = {};
  @Output() newItemEvent = new EventEmitter<string>();
  cleanedDate:string = '';

  ngOnInit(): void {
    // console.log(this.filteredRecords)
      this.cleanedDate = this.filteredRecords.dateIn.slice(0, 10).split('-').join(' / ')
  }

  sendStatus = (value: string):void => {
    event.preventDefault()
    this.newItemEvent.emit(value);
    // changeViewStatus('detailedView', filteredRecords.id);
  }
};