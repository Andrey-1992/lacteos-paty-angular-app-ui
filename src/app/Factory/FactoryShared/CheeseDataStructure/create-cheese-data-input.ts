import { Component } from '@angular/core';
import { DataStorageService } from '../FactoryProdDatastorage/factory-prod-datastorage.service';

@Component({
  selector: 'app-create-cheese-input',
  templateUrl: './create-cheese-data-input.component.html',
  styleUrls: ['./create-cheese-data-input.component.css']
})
export class CreateCheeseDataInput {

  constructor(private dataStorage: DataStorageService) {}
  
  urlImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShezzrcP_kQ2aqlw0AgJqSi2UWDekCbm3JNQ&usqp=CAU';
  selectedCategory: string;
  selectedRefrigerationType: string;
  selectedLoteNo: number;
  selectedPzNo: number;
  selectedPotsNo: number;
  selectedDate: any;
  isDisable: boolean = false;
  
  cheeseCategory = [
    {Name:'Baraloso', Value:'Baraloso'}, {Name:'Comiteco', Value:'Comiteco'}, 
    {Name:'Comiteco BA', Value:'Comiteco BA'}, {Name:'Comiteco AA', Value:'Comiteco AA'},
    {Name:'Selecione Categoria', Value:''}
  ];
  
  refrigerationCategory = [
    {Name:'Grande', Value:'Grande'},{Name:'Mediana', Value:'Mediana'}, 
    {Name:'Chica', Value:'Chica'}, {Name:'Selecione Refrigeracion', Value:''}
  ];
  
  getSelectedCategory(e) {
    this.selectedCategory = e.target.value;
    console.log(e.target.value)
  }

  getSelectedRefrigerationType(e) {
    this.selectedRefrigerationType = e.target.value;
  }

  getSelectedLoteNo(e) {
    this.selectedLoteNo = e.target.value;
  }

  getSelectedPzNo(e) {
    this.selectedPzNo = e.target.value;
  }

  getSelectedPotsNo(e) {
    this.selectedPotsNo = e.target.value;
  }

  getSelectedDate(e) {
    this.selectedDate = e.target.value;
  }
  
  postData() {
    event.preventDefault();
    this.dataStorage.storeCheeseRecord({
      cheeseName: this.selectedCategory,
      cheeseStatus: 'Entrada',
      cheeseAvailability: true,
      piecesNo: this.selectedPzNo,
      piecesOutNo: 0,
      weight: 0,
      currentWeight: 0,
      potsNo: this.selectedPotsNo,
      dateIn: this.selectedDate,
      dateOut: '',
      price: 0,
      approveProd: 'Falso',
      loteNo: this.selectedLoteNo,
      refrigerationType: this.selectedRefrigerationType
    })
    this.isDisable = true;
  }

  getData() {
    event.preventDefault();
    this.dataStorage.getCheeseRecords();
  }

}