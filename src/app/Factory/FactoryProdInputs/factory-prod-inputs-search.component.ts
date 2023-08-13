import { Component } from '@angular/core';
import { FactoryDynamicMenusModel } from '../FactoryShared/factory-dynamic-menus.model';
import { DataHandlingService } from '../FactoryShared/FactoryProdDatastorage/factory-prod-data-handling.service';

@Component({
  selector: 'app-search-cheese-input',
  templateUrl: './factory-prod-inputs-search.component.html',
  styleUrls: ['./factory-prod-inputs-search.component.css']
})

export class FactoryProdInputsSearch {
  constructor(private dataHandlingService: DataHandlingService) {}

  selectedCategory: string;
  selectedMonth: string;
  selectedYear: string;
  filterDataByDate = [];

  cheeseCategory = [
    {Name:'Todos los quesos', Value:'Todos'}, {Name:'Baraloso', Value:'Baraloso'}, 
    {Name:'Comiteco', Value:'Comiteco'}, {Name:'Comiteco BA', Value:'Comiteco BA'}, 
    {Name:'Comiteco AA', Value:'Comiteco AA'}, {Name:'Selecione Categoria', Value:''}
  ];

  monthSelection = [
    {Name:'Seleccione Mes', Value:''}, {Name:'Enero', Value: '01'}, {Name:'Febrero', Value: '02'},{Name:'Marzo', Value: '03'},
    {Name:'Abril', Value: '04'}, {Name:'Mayo', Value: '05'}, {Name:'Junio', Value: '06'}, {Name:'Julio', Value: '07'},
    {Name:'Agosto', Value: '08'}, {Name:'Septiembre', Value: '09'}, {Name:'Octubre', Value: '10'}, {Name:'Noviembre', Value: '11'},
    {Name:'Diciembre', Value: '12'}
  ];

  yearSelection = [
    {Name:'Seleccione Año', Value:''},{Name:'2023', Value: '2023'}, {Name:'2024', Value: '2024'}, {Name:'2025', Value: '2025'}, 
    {Name:'2026', Value: '2026'},{Name:'2027', Value: '2027'}, {Name:'2028', Value: '2028'}, {Name:'2029', Value: '2029'}, 
    {Name: '2030', Value: '2030'}, {Name: '2031', Value: '2031'}, {Name: '2032', Value: '2032'}, {Name: '2033', Value: '2033'}
  ];

  getSelectedCategory(e) {
    this.selectedCategory = e.target.value;
  }

  getSelectedMonth(e) {
    this.selectedMonth = e.target.value;
  }

  getSelectedYear(e) {
    this.selectedYear = e.target.value;
  }

  searchRecords() {
    event.preventDefault();
    this.filterDataByDate = this.dataHandlingService.filterDataByDate(this.selectedCategory, this.selectedMonth, this.selectedYear)
    // console.log(this.dataHandlingSer.filterDataByDate(this.selectedCategory, this.selectedMonth, this.selectedYear))

  }
};