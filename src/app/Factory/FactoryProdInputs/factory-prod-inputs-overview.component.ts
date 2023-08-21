import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheeseDataStructureModel } from '../FactoryShared/CheeseDataStructure/cheese-data-structure.model';

@Component({
  selector: 'app-overview-cheese-input',
  templateUrl: './factory-prod-inputs-overview.component.html',
  styleUrls: ['./factory-prod-inputs-overview.component.css']
})

export class FactoryProdInputsOverview  implements OnInit{
  @Input() filteredRecords: CheeseDataStructureModel = {};
  @Output() detailView = new EventEmitter<boolean>();
  @Output() selectedRecord = new EventEmitter<CheeseDataStructureModel>();
  cleanedDate:string = '';

  ngOnInit(): void {
    // console.log(this.filteredRecords)
    this.cleanedDate = this.filteredRecords.dateIn.slice(0, 10).split('-').join(' / ')
  }

  sendStatus = ():void => {
    event.preventDefault()
    this.detailView.emit(true);
    this.selectedRecord.emit(this.filteredRecords);
  }
};