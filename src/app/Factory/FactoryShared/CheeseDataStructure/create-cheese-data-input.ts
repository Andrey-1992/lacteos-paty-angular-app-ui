import { Component } from '@angular/core';

@Component({
  selector: 'app-create-cheese-input',
  templateUrl: './create-cheese-data-input.component.html',
  styleUrls: ['./create-cheese-data-input.component.css']
})
export class CreateCheeseDataInput {
  urlImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShezzrcP_kQ2aqlw0AgJqSi2UWDekCbm3JNQ&usqp=CAU';
  selectedCategory: string;
  selectedRefrigerationType: string;
  selectedLoteNo: string | number;
  selectedPzNo: number;
  selectedPotsNo: number;
  selectedDate: any;

  cheeseCategory = [
    {Name:'Selecione Categoria', Value:''},
    {Name:'Baraloso', Value:'Baraloso'}, {Name:'Comiteco', Value:'Comiteco'}, 
    {Name:'Comiteco BA', Value:'Comiteco BA'}, {Name:'Comiteco AA', Value:'Comiteco AA'}
  ];

  refrigerationCategory = [
    {Name:'Selecione Refrigeracion', Value:''}, {Name:'Grande', Value:'Grande'}, 
    {Name:'Mediana', Value:'Mediana'}, {Name:'Chica', Value:'Chica'}
  ];

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
    console.log(
      this.selectedCategory,
      this.selectedRefrigerationType,
      this.selectedLoteNo,
      this.selectedPzNo,
      this.selectedPotsNo,
      this.selectedDate
    )
  }

}