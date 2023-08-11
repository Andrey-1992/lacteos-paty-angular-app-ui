import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { CheeseDataStructureModel } from "../CheeseDataStructure/cheese-data-structure.model";

@Injectable({providedIn: 'root'})
export class DataStorageService {

  storeCheeseRecord(cheeseData: CheeseDataStructureModel) {

  }
}
