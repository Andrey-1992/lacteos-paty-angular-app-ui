import { Component } from '@angular/core';

@Component({
  selector: 'app-overview-cheese-input',
  templateUrl: './factory-prod-inputs-overview.component.html',
  styleUrls: ['./factory-prod-inputs-overview.component.css']
})

export class FactoryProdInputsOverview {
  sendStatus = ():void => {
    event.preventDefault()
    console.log('testiong b utton')
    // changeViewStatus('detailedView', filteredRecords.id);
  }
};