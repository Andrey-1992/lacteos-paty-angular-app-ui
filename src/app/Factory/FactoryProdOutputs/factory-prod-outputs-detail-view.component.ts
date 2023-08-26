// factory-prod-outputs-detail-view.component
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheeseDataStructureModel } from '../FactoryShared/CheeseDataStructure/cheese-data-structure.model';
import { DataStorageService } from '../FactoryShared/FactoryProdDatastorage/factory-prod-datastorage.service';

@Component({
  selector: 'app-detail-view-cheese-output',
  templateUrl: './factory-prod-outputs-detail-view.component.html',
  styleUrls: ['./factory-prod-outputs-detail-view.component.css']
})

export class FactoryProdOutputsDetailView implements OnInit{
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
  isDisable: boolean = false;

  cheeseCategory = [
    {Name:'Baraloso', Value:'Baraloso'}, {Name:'Comiteco', Value:'Comiteco'}, 
    {Name:'Comiteco BA', Value:'Comiteco BA'}, {Name:'Comiteco AA', Value:'Comiteco AA'},
    {Name:'Selecione Categoria', Value:''}
  ];

  refrigerationCategory = [
    {Name:'Grande', Value:'Grande'},{Name:'Mediana', Value:'Mediana'}, 
    {Name:'Chica', Value:'Chica'}, {Name:'Cambiar Refrigeracion', Value:''}
  ];

  cheeseStatus = [
    {Name:'Falso', Value:'Falso'}, {Name:'Verdadero', Value:'Verdadero'}, {Name:'Cambiar Status', Value:''}
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
    console.log(this.filteredRecords)
  }

  getSelectedCategory(e) {
    this.selectedCategory = e.target.value;
  }

  getSelectedRefrigerationType(e) {
    this.selectedRefrigeration = e.target.value;
  }
  
  getSelectedStatus(e) {
    this.selectedApprovedProd = e.target.value;
  }

  getSelectedDate(e) {
    this.selectedDate = e.target.value;
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

  updateRecord() {
    event.preventDefault()  
    let selectedData = {
      cheeseName: this.selectedCategory,
      cheeseStatus: 'Entrada',
      cheeseAvailability: true,
      piecesNo: this.selectedPiecesNo ,
      piecesOutNo: 0,
      weight: 0,
      currentWeight: 0,
      potsNo: this.selectedPotsNo,
      dateIn: this.selectedDate,
      dateOut: '',
      price: this.selectedPrice,
      approveProd: this.selectedApprovedProd,
      loteNo: this.selectedLoteNo,
      refrigerationType: this.selectedRefrigeration
    }
    // console.log(selectedData)
    this.dataStorage.updateCheeseRecord(selectedData, this.filteredRecords.id);
    this.isDisable = true;
  }

  deleteRecord() {
    event.preventDefault()  
    this.dataStorage.deleteCheeseRecord(this.filteredRecords.id);
    this.isDisable = true;
  }
};