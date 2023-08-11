import { Injectable } from "@angular/core";
import { filter } from "rxjs";
import { CheeseDataStructureModel } from "../CheeseDataStructure/cheese-data-structure.model";
import { DataStorageService } from "./factory-prod-datastorage.service";

@Injectable({providedIn: 'root'})
export class DataHandlingService {

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

  filterDataByDate = (categoy: string, month: string, year: string) => {
    console.log(categoy, month, year)
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
    // const dataFiltered = data.reduce((acc:any, dataRecords: any) => {
    //   const cheeseCat = dataRecords.quesoname;
    //   const yearData = dataRecords.datein.split('-')[0];
    //   const monthData = dataRecords.datein.split('-')[1]
    //   if (yearData === selectedYear && monthData === selectedMonth && selectedCategory === 'Todos' && dataRecords.quesostatus === 'Entrada') {
    //     acc.push(dataRecords)
    //   }
    //   if (yearData === selectedYear && monthData === selectedMonth && selectedCategory === cheeseCat && dataRecords.quesostatus === 'Entrada') {
    //     acc.push(dataRecords)
    //   }
    //   return acc;
    // }, [])
    // setFetchedRecords(dataFiltered);
  }
}