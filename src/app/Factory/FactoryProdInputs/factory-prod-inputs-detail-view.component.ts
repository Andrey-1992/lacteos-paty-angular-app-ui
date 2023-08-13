import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheeseDataStructureModel } from '../FactoryShared/CheeseDataStructure/cheese-data-structure.model';

@Component({
  selector: 'app-detail-view-cheese-input',
  templateUrl: './factory-prod-inputs-detail-view.component.html',
  styleUrls: ['./factory-prod-inputs-detail-view.component.css']
})

export class FactoryProdInputsDetailView  implements OnInit{

  @Input() filteredRecords: CheeseDataStructureModel = {};
  @Output() overview = new EventEmitter<boolean>();
  cleanedDate:string = '';
  // @Output() selectedRecord = new EventEmitter<CheeseDataStructureModel>();

  ngOnInit(): void {
    // console.log(this.filteredRecords)
    this.cleanedDate = this.filteredRecords.dateIn.slice(0, 10).split('-').join(' / ')
  }

  sendViewStatus = ():void => {
    event.preventDefault()
    this.overview.emit(false);
    // this.selectedRecord.emit(this.filteredRecords);
  }
};