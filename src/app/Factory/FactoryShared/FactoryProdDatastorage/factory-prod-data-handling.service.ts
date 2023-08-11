import { Injectable } from "@angular/core";
import { CheeseDataStructureModel } from "../CheeseDataStructure/cheese-data-structure.model";
import { DataStorageService } from "./factory-prod-datastorage.service";

@Injectable({providedIn: 'root'})
export class DataHandlingService {
  constructor(private dataStorage: DataStorageService) {}
}