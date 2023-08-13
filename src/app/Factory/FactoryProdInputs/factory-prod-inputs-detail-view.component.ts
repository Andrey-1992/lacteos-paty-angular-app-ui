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

  selectedCategory: string;
  selectedRefrigeration: string;
  cleanedDate:string;
  selectedDate: string;
  selectedStatus: string;

  cheeseCategory = [
    {Name:'Selecione Categoria', Value:''}, 
    {Name:'Baraloso', Value:'Baraloso'}, {Name:'Comiteco', Value:'Comiteco'}, 
    {Name:'Comiteco BA', Value:'Comiteco BA'}, {Name:'Comiteco AA', Value:'Comiteco AA'}
  ];

  refrigerationCategory = [
    {Name:'Selecione Refrigeracion', Value:''}, {Name:'Grande', Value:'Grande'}, 
    {Name:'Mediana', Value:'Mediana'}, {Name:'Chica', Value:'Chica'}
  ];

  cheeseStatus = [
    {Name:'Falso', Value:'Falso'}, {Name:'Verdadero', Value:'Verdadero'}
  ];


  ngOnInit(): void {
    this.cleanedDate = this.filteredRecords.dateIn.slice(0, 10).split('-').join(' / ');
    this.selectedCategory = this.filteredRecords.cheeseName;
    this.selectedRefrigeration = this.filteredRecords.refrigerationType;
    this.selectedStatus = this.filteredRecords.cheeseStatus;
  }

  getSelectedCategory(e) {
    this.selectedCategory = e.target.value;
  }

  getSelectedRefrigeration(e) {
    this.selectedRefrigeration = e.target.value;
  }

  getSelectedDate(e) {
    this.selectedDate = e.target.value;
  }

  getSelectedStatus(e) {
    this.selectedStatus = e.target.value;
  }

  sendViewStatus = ():void => {
    event.preventDefault()
    this.overview.emit(false);
  }
};