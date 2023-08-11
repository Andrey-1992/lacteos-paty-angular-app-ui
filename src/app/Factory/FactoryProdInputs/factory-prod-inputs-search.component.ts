import { Component } from '@angular/core';
import { FactoryDynamicMenusModel } from '../FactoryShared/factory-dynamic-menus.model';

@Component({
  selector: 'app-search-cheese-input',
  templateUrl: './factory-prod-inputs-search.component.html',
  styleUrls: ['./factory-prod-inputs-search.component.css']
})

export class FactoryProdInputsSearch {
  selectedCategory: string;

  cheeseCategory = [
    {Name:'Selecione Categoria', Value:''}, {Name:'Todos los quesos', Value:'Todos'}, 
    {Name:'Baraloso', Value:'Baraloso'}, {Name:'Comiteco', Value:'Comiteco'}, 
    {Name:'Comiteco BA', Value:'Comiteco BA'}, {Name:'Comiteco AA', Value:'Comiteco AA'}
  ];

  monthSelection = [
    {Name:'Seleccione Mes', Value:''}, {Name:'Enero', Value: '01'}, {Name:'Febrero', Value: '02'},{Name:'Marzo', Value: '03'},
    {Name:'Abril', Value: '04'}, {Name:'Mayo', Value: '05'}, {Name:'Junio', Value: '06'}, {Name:'Julio', Value: '07'},
    {Name:'Agosto', Value: '08'}, {Name:'Septiembre', Value: '09'}, {Name:'Octubre', Value: '10'}, {Name:'Noviembre', Value: '11'},
    {Name:'Diciembre', Value: '12'}
  ];

  yearSelection = [
    {Name:'Seleccione Año', Value:''}, {Name:'2020', Value: '2020'}, {Name:'2021', Value: '2021'},{Name:'2022', Value: '2022'},
    {Name:'2023', Value: '2023'}, {Name:'2024', Value: '2024'}, {Name:'2025', Value: '2025'}, {Name:'2026', Value: '2026'},
    {Name:'2027', Value: '2027'}, {Name:'2028', Value: '2028'}, {Name:'2029', Value: '2029'}, {Name: '2030', Value: '2030'}
  ];

  getSelectedCategory(e) {
    this.selectedCategory = e.target.value;
  }
};