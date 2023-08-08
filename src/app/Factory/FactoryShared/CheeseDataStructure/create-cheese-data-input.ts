import { Component } from '@angular/core';

@Component({
  selector: 'app-create-cheese-input',
  templateUrl: './create-cheese-data-input.component.html',
  styleUrls: ['./create-cheese-data-input.component.css']
})
export class CreateCheeseDataInput {
  cheeseCategory = [
    {Name:'Selecione Categoria', Value:''},
    {Name:'Baraloso', Value:'Baraloso'}, {Name:'Comiteco', Value:'Comiteco'}, 
    {Name:'Comiteco BA', Value:'Comiteco BA'}, {Name:'Comiteco AA', Value:'Comiteco AA'}
  ];

  refrigerationCategory = [
    {Name:'Selecione Refrigeracion', Value:''}, {Name:'Grande', Value:'Grande'}, 
    {Name:'Mediana', Value:'Mediana'}, {Name:'Chica', Value:'Chica'}
  ];

}