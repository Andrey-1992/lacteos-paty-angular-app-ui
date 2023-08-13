import { Component, Input } from '@angular/core';
import { CheeseDataStructureModel } from '../FactoryShared/CheeseDataStructure/cheese-data-structure.model';

@Component({
  selector: 'app-overview-cheese-input',
  templateUrl: './factory-prod-inputs-overview.component.html',
  styleUrls: ['./factory-prod-inputs-overview.component.css']
})

export class FactoryProdInputsOverview {
  @Input() filteredRecords: any = {}; // decorate the property with @Input()

  sendStatus = ():void => {
    event.preventDefault()
    console.log('testiong button')
    // changeViewStatus('detailedView', filteredRecords.id);
  }
};