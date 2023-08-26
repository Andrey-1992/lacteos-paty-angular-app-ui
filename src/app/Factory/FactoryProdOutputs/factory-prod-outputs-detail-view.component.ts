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
  selectedDateIn: string;
  selectedDateOut: string;
  selectedApprovedProd: string;
  selectedPiecesNo: number;
  selectedPiecesOutNo: number;
  selectedPotsNo: number;
  selectedLoteNo: number;
  selectedPrice: number;
  selectedWeight: number;
  piecesSubstraction: number
  isDisable: boolean = false;

  ngOnInit(): void {
    this.cleanedDate = this.filteredRecords.dateIn.slice(0, 10).split('-').join(' / ');
    this.selectedCategory = this.filteredRecords.cheeseName;
    this.selectedRefrigeration = this.filteredRecords.refrigerationType;
    this.selectedApprovedProd = this.filteredRecords.approveProd;
    this.selectedDateIn = this.filteredRecords.dateIn;
    this.selectedDateOut = this.filteredRecords.dateOut;
    this.selectedPiecesNo = this.filteredRecords.piecesNo;
    this.selectedPiecesOutNo = this.filteredRecords.piecesOutNo;
    this.selectedPotsNo = this.filteredRecords.potsNo;
    this.selectedLoteNo = this.filteredRecords.loteNo;
    this.selectedPrice = this.filteredRecords.price;
    this.selectedWeight = this.filteredRecords.weight;
    // console.log(this.filteredRecords)
  }

  getSelectedDate(e) {
    this.selectedDateOut = e.target.value;
  }

  getSelectedPiecesOutNo(e) {
    this.selectedPiecesOutNo = e.target.value;
  }


  getSelectedPrice(e) {
    this.selectedPrice = e.target.value;
  }

  getSelectedWeight(e) {
    this.selectedWeight= e.target.value;
  }

  sendViewStatus = ():void => {
    event.preventDefault()
    this.overview.emit(false);
  }

  calculateNewTotal() {
    event.preventDefault()  
    this.piecesSubstraction = this.selectedPiecesNo - this.selectedPiecesOutNo
  }

  updateRecord() {
    event.preventDefault()  
    this.calculateNewTotal();
    let selectedData = {
      cheeseName: this.selectedCategory,
      cheeseStatus: 'Entrada',
      cheeseAvailability: true,
      piecesNo: this.piecesSubstraction,
      piecesOutNo: this.selectedPiecesOutNo,
      weight: this.selectedWeight,
      currentWeight: 0,
      potsNo: this.selectedPotsNo,
      dateIn: this.selectedDateIn,
      dateOut: this.selectedDateOut,
      price: this.selectedPrice,
      approveProd: this.selectedApprovedProd,
      loteNo: this.selectedLoteNo,
      refrigerationType: this.selectedRefrigeration
    }
    console.log(selectedData)
    // this.dataStorage.updateCheeseRecord(selectedData, this.filteredRecords.id);
    this.isDisable = true;
  }
};