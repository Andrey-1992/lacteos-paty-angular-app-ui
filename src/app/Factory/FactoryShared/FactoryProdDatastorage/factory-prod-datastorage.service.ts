import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { CheeseDataStructureModel } from "../CheeseDataStructure/cheese-data-structure.model";

@Injectable({providedIn: 'root'})

export class DataStorageService {
  constructor(private http: HttpClient) {}

  getCheeseRecords() {
    this.http.get('https://fabrica-produccion-database-default-rtdb.firebaseio.com/cheese-record.json')
    .subscribe(resData => {
      console.log(resData);
    })
  }

  storeCheeseRecord(cheeseData: CheeseDataStructureModel) {
    this.http.post('https://fabrica-produccion-database-default-rtdb.firebaseio.com/cheese-record.json', cheeseData)
    .subscribe(resData => {
      console.log(resData);
    })
  }
}
