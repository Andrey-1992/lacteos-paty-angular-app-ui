import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheeseDataStructureModel } from '../FactoryShared/CheeseDataStructure/cheese-data-structure.model';
import { DataStorageService } from '../FactoryShared/FactoryProdDatastorage/factory-prod-datastorage.service';

@Component({
  selector: 'app-detail-view-cheese-input',
  templateUrl: './factory-prod-inputs-detail-view.component.html',
  styleUrls: ['./factory-prod-inputs-detail-view.component.css']
})

export class FactoryProdInputsDetailView  implements OnInit{
  constructor(private dataStorage: DataStorageService) {}


  @Input() filteredRecords: CheeseDataStructureModel = {};
  @Output() overview = new EventEmitter<boolean>();

  selectedCategory: string;
  selectedRefrigeration: string;
  cleanedDate:string;
  selectedDate: string;
  selectedApprovedProd: string;
  selectedPiecesNo: number;
  selectedPotsNo: number;
  selectedLoteNo: number;
  selectedPrice: number;

  cheeseCategory = [ 
    {Name:'Baraloso', Value:'Baraloso'}, {Name:'Comiteco', Value:'Comiteco'}, 
    {Name:'Comiteco BA', Value:'Comiteco BA'}, {Name:'Comiteco AA', Value:'Comiteco AA'},
    {Name:'Selecione Categoria', Value:''}
  ];

  refrigerationCategory = [
    {Name:'Selecione Refrigeracion', Value:''}, {Name:'Grande', Value:'Grande'}, 
    {Name:'Mediana', Value:'Mediana'}, {Name:'Chica', Value:'Chica'}
  ];

  cheeseStatus = [
    {Name:'Falso', Value:'Falso'}, {Name:'Verdadero', Value:'Verdadero'}, {Name:'Nueva Seleccion', Value:''}
  ];


  ngOnInit(): void {
    this.cleanedDate = this.filteredRecords.dateIn.slice(0, 10).split('-').join(' / ');
    this.selectedCategory = this.filteredRecords.cheeseName;
    this.selectedRefrigeration = this.filteredRecords.refrigerationType;
    this.selectedApprovedProd = this.filteredRecords.approveProd;
    this.selectedDate = this.filteredRecords.dateIn;
    this.selectedPiecesNo = this.filteredRecords.piecesNo;
    this.selectedPotsNo = this.filteredRecords.potsNo;
    this.selectedLoteNo = this.filteredRecords.loteNo;
    this.selectedPrice = this.filteredRecords.price;
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
    this.selectedApprovedProd = e.target.value;
  }

  getSelectedPiecesNo(e) {
    this.selectedPiecesNo = e.target.value;
  }

  getSelectedPotsNo(e) {
    this.selectedPotsNo = e.target.value;
  }

  getSelectedLoteNo(e) {
    this.selectedLoteNo = e.target.value;
  }

  getSelectedPrice(e) {
    this.selectedPrice = e.target.value;
  }

  sendViewStatus = ():void => {
    event.preventDefault()
    this.overview.emit(false);
  }

  callServer() {
    event.preventDefault()  
    this.dataStorage.getCheeseRecords
  }
};