import { Injectable } from "@angular/core";
import { CheeseDataStructureModel } from "../CheeseDataStructure/cheese-data-structure.model";
import { DataStorageService } from "./factory-prod-datastorage.service";

@Injectable({providedIn: 'root'})
export class DataHandlingService {
  constructor(private dataStorage: DataStorageService) {}

  fetchedCheeseRecords: CheeseDataStructureModel[];
  baralosoCurrentStorage: number = 0;
  comitecoCurrentStorage: number = 0;
  comitecoAACurrentStorage: number = 0;
  comitecoBACurrentStorage: number = 0;

  filterCheeseDataByDate = (): void => {
    this.dataStorage.getCheeseRecords()
    .subscribe(resData => {
      this.fetchedCheeseRecords = resData;
    })
    let baraloso = 0;
    let comiteco = 0;
    let comitecoAa = 0;
    let comitecoBa = 0;
    console.log(this.fetchedCheeseRecords)

    this.fetchedCheeseRecords.map((dataRecords: CheeseDataStructureModel) => {
      if (dataRecords.cheeseName === 'Baraloso' && dataRecords.approveProd === 'Verdadero') {
        baraloso += dataRecords.piecesNo
      }
      if (dataRecords.cheeseName === 'Comiteco' && dataRecords.approveProd === 'Verdadero') {
        comiteco += dataRecords.piecesNo
      }
      if (dataRecords.cheeseName === 'Comiteco AA' && dataRecords.approveProd === 'Verdadero') {
        comitecoAa += dataRecords.piecesNo
      }
      if (dataRecords.cheeseName === 'Comiteco BA' && dataRecords.approveProd === 'Verdadero') {
        comitecoBa += dataRecords.piecesNo
      }
    })

    this. baralosoCurrentStorage = baraloso;
    this.comitecoCurrentStorage = comiteco;
    this.comitecoAACurrentStorage = comitecoAa;
    this.comitecoBACurrentStorage = comitecoBa;
  }
}