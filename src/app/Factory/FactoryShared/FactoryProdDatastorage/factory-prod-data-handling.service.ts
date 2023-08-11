import { Injectable } from "@angular/core";
import { filter } from "rxjs";
import { CheeseDataStructureModel } from "../CheeseDataStructure/cheese-data-structure.model";
import { DataStorageService } from "./factory-prod-datastorage.service";

@Injectable({providedIn: 'root'})
export class DataHandlingService {
  filterData: any;

  constructor(private dataStorage: DataStorageService) {}

  filterCheeseDataByDate = (): {cheeseName: '', piecesNo: 0}[] => {
    const filterData = [];
    let baraloso = {cheeseName: 'Baraloso', piecesNo: 0 };
    let baralosoCount = 0;
    let comiteco = {cheeseName: 'Comiteco', piecesNo: 0};
    let comitecoAa = {cheeseName: 'Comiteco AA', piecesNo: 0};
    let comitecoBa = {cheeseName: 'Comiteco BA', piecesNo: 0};
    this.dataStorage.getCheeseRecords()
    .subscribe(resData => {
      resData.map((dataRecords: CheeseDataStructureModel) => {
        if (dataRecords.cheeseName === 'Baraloso' && dataRecords.approveProd === 'Verdadero') {
          baraloso.piecesNo += parseInt(dataRecords.piecesNo);
        }
        if (dataRecords.cheeseName === 'Comiteco' && dataRecords.approveProd === 'Verdadero') {
          comiteco.piecesNo += parseInt(dataRecords.piecesNo);
        }
        if (dataRecords.cheeseName === 'Comiteco AA' && dataRecords.approveProd === 'Verdadero') {
          comitecoAa.piecesNo += parseInt(dataRecords.piecesNo);
        }
        if (dataRecords.cheeseName === 'Comiteco BA' && dataRecords.approveProd === 'Verdadero') {
          comitecoBa.piecesNo += parseInt(dataRecords.piecesNo);
        }
      })
    })
    filterData.push(baraloso, comiteco, comitecoAa, comitecoBa);
    return filterData;
  }

  filterDataByDate = (selectedCategory: string, selectedMonth: string, selectedYear: string) => {
    this.dataStorage.getCheeseRecords()
    .subscribe(resData => {
      // console.log(resData)
      this.filterData = resData.reduce((acc:any, dataRecords: CheeseDataStructureModel) => {
      console.log(dataRecords)
      const cheeseCategory = dataRecords.cheeseName;
      if (resData) {
        const yearData = dataRecords.dateIn.split('-')[0];
        const monthData = dataRecords.dateIn.split('-')[1]
        if (yearData === selectedYear && monthData === selectedMonth && selectedCategory === 'Todos' && dataRecords.cheeseStatus === 'Entrada') {
          acc.push(dataRecords)
        }
        if (yearData === selectedYear && monthData === selectedMonth && selectedCategory === cheeseCategory && dataRecords.cheeseStatus === 'Entrada') {
          acc.push(dataRecords)
        }
      }
        return acc;
      }, [])
    })
    // console.log(this.filterData);
  }
}