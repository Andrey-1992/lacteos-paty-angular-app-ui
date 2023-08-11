import { Component } from '@angular/core';
import { DataStorageService } from '../FactoryProdDatastorage/factory-prod-datastorage.service';

@Component({
  selector: 'app-create-cheese-input',
  templateUrl: './create-cheese-data-input.component.html',
  styleUrls: ['./create-cheese-data-input.component.css']
})
export class CreateCheeseDataInput {
  
  urlImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShezzrcP_kQ2aqlw0AgJqSi2UWDekCbm3JNQ&usqp=CAU';
  selectedCategory: string;
  selectedRefrigerationType: string;
  selectedLoteNo: number;
  selectedPzNo: number;
  selectedPotsNo: number;
  selectedDate: any;
  isDisable: boolean = false;
  
  cheeseCategory = [
    {Name:'Selecione Categoria', Value:''},
    {Name:'Baraloso', Value:'Baraloso'}, {Name:'Comiteco', Value:'Comiteco'}, 
    {Name:'Comiteco BA', Value:'Comiteco BA'}, {Name:'Comiteco AA', Value:'Comiteco AA'}
  ];
  
  refrigerationCategory = [
    {Name:'Selecione Refrigeracion', Value:''}, {Name:'Grande', Value:'Grande'}, 
    {Name:'Mediana', Value:'Mediana'}, {Name:'Chica', Value:'Chica'}
  ];
  
  constructor(private dataStorage: DataStorageService) {}

  getSelectedCategory(e) {
    this.selectedCategory = e.target.value;
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
  
  fetchData() {
    event.preventDefault();

    // createProdRecorduction({
    //   'quesoname': selectedCategory,
    //   'quesostatus': 'Entrada',
    //   'quesoavailability': true,
    //   'nopieces': parseInt(selectedPieces),
    //   'nopiecessalida': 0,
    //   'weigth': 0,
    //   'weigthcurrent': 0,
    //   'holladas': parseInt(selectedOlladas),
    //   'datein': selectedDate,
    //   'dateout': '',
    //   'price': 0,
    //   'approvepord': 'Falso',
    //   'lotenum': numLote,
    //   'refrigerationtype': selectedRefrigeration
    // })
    
    this.dataStorage.storeCheeseRecord({
      // id?: number,
      quesoname: this.selectedCategory,
      quesostatus: 'Entrada',
      quesoavailability: true,
      piecesNo: this.selectedPzNo,
      piecesOutNo: 0,
      weight: 0,
      currentWeight: 0,
      potsNo: this.selectedPotsNo,
      dateIn: this.selectedDate,
      dateOut: '',
      price: 0,
      approveProd: 'Falso',
      loteNo: this.selectedLoteNo
    })


    console.log(
      this.selectedCategory,
      this.selectedRefrigerationType,
      this.selectedLoteNo,
      this.selectedPzNo,
      this.selectedPotsNo,
      this.selectedDate
    )
    this.isDisable = true;
  }

}