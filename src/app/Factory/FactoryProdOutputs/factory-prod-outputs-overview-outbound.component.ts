import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheeseDataStructureModel } from '../FactoryShared/CheeseDataStructure/cheese-data-structure.model';

@Component({
  selector: 'app-overview-cheese-output-outbound',
  templateUrl: './factory-prod-outputs-overview-outbound.component.html',
  styleUrls: ['./factory-prod-outputs-overview-outbound.component.css']
})

export class FactoryProdOutputsOverviewOutbound implements OnInit{
  @Input() filteredRecords: CheeseDataStructureModel = {};
  // @Output() detailView = new EventEmitter<boolean>();
  // @Output() selectedRecord = new EventEmitter<CheeseDataStructureModel>();
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
};