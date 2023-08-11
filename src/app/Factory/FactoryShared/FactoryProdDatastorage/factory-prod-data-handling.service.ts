import { Injectable } from "@angular/core";
import { filter } from "rxjs";
import { CheeseDataStructureModel } from "../CheeseDataStructure/cheese-data-structure.model";
import { DataStorageService } from "./factory-prod-datastorage.service";

@Injectable({providedIn: 'root'})
export class DataHandlingService {
  constructor(private dataStorage: DataStorageService) {}

  filterCheeseDataByDate = (): {cheeseName: '', piecesNo: 0}[] => {
    const filterData = [];
    let baraloso = {cheeseName: 'Baraloso', piecesNo: 0};
    let comiteco = {cheeseName: 'Comiteco', piecesNo: 0};
    let comitecoAa = {cheeseName: 'Comiteco AA', piecesNo: 0};
    let comitecoBa = {cheeseName: 'Comiteco BA', piecesNo: 0};

    this.dataStorage.getCheeseRecords()
    .subscribe(resData => {
      resData.map((dataRecords: CheeseDataStructureModel) => {
        if (dataRecords.cheeseName === 'Baraloso' && dataRecords.approveProd === 'Verdadero') {
          baraloso.piecesNo += dataRecords.piecesNo;
        }
        if (dataRecords.cheeseName === 'Comiteco' && dataRecords.approveProd === 'Verdadero') {
          comiteco.piecesNo += dataRecords.piecesNo
        }
        if (dataRecords.cheeseName === 'Comiteco AA' && dataRecords.approveProd === 'Verdadero') {
          comitecoAa.piecesNo += dataRecords.piecesNo
        }
        if (dataRecords.cheeseName === 'Comiteco BA' && dataRecords.approveProd === 'Verdadero') {
          comitecoBa.piecesNo += dataRecords.piecesNo
        }
      })
    })
    
    filterData.push(baraloso, comiteco, comitecoAa, comitecoBa);
    // console.log(filterData)
    return filterData;
  }
}