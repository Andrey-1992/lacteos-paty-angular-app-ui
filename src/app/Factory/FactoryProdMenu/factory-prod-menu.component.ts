import { Component, OnInit } from '@angular/core';
import { CheeseDataStructureModel } from '../FactoryShared/CheeseDataStructure/cheese-data-structure.model';
import { DataStorageService } from '../FactoryShared/FactoryProdDatastorage/factory-prod-datastorage.service';
import { map } from "rxjs/operators";


@Component({
  selector: 'app-factory-prod-menu',
  templateUrl: './factory-prod-menu.component.html',
  styleUrls: ['./factory-prod-menu.component.css']
})
export class FactoryProdMenu implements OnInit{

  constructor(private dataStorage: DataStorageService) {}

  ngOnInit(): void {
    // this.dataStorage.getCheeseRecords()
    // .subscribe(resData => {
    //   this.filterCheeseDataByDate(resData);
    // })
  };

  cheeseUrl: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShezzrcP_kQ2aqlw0AgJqSi2UWDekCbm3JNQ&usqp=CAU";
  dateObj = new Date();
  dateArray = this.dateObj.toString().split(' ');
  todaysDate = this.dateArray.splice(1, 3).join(' / ');

  baralosoCurrentStorage: number = 0;
  comitecoCurrentStorage: number = 0;
  comitecoAACurrentStorage: number = 0;
  comitecoBACurrentStorage: number = 0;

  filterCheeseDataByDate = (cheeseData:CheeseDataStructureModel[]): void => {
    let baraloso = 0;
    let comiteco = 0;
    let comitecoAa = 0;
    let comitecoBa = 0;
    console.log(cheeseData)

    cheeseData.map((dataRecords: CheeseDataStructureModel) => {
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