import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { CheeseDataStructureModel } from "../CheeseDataStructure/cheese-data-structure.model";
import { map } from "rxjs/operators";
import { Firestore, collection, collectionData, doc, addDoc, deleteDoc } from "@angular/fire/firestore";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private firebase:Firestore) {}

  getCheeseRecords() {
    let id = 'k8kYKXoJ5B2fjDnDh2bZ';
    // let notesCollection = collection(this.firebase, 'factory-chesse-records');
    let notesCollection = collection(this.firebase, 'factory-chesse-records'+id);
    return collectionData(notesCollection, {idField:'id'})
  }

  getSpecificCheeseRecord(id:string) {
    id = 'k8kYKXoJ5B2fjDnDh2bZ';
    let notesCollection = collection(this.firebase, 'factory-chesse-records'+id);
    return collectionData(notesCollection)
  }

  storeCheeseRecord(cheeseData: CheeseDataStructureModel) {
    this.http.post<CheeseDataStructureModel>('https://fabrica-produccion-database-default-rtdb.firebaseio.com/cheese-record.json', cheeseData)
    .subscribe(resData => {
      console.log(resData);
    })
  }
}









  // getCheeseRecords() {
  //   return this.http.get<CheeseDataStructureModel[]>('https://fabrica-produccion-database-default-rtdb.firebaseio.com/cheese-record.json/')
  //   .pipe(map(resData => {
  //     const postArray = [];
  //     for (const key in resData) {
  //       postArray.push({...resData[key], id: key})
  //     }
  //     return postArray;
  //   }))
  //   // .subscribe(resData => {
  //   //   console.log(resData);
  //   // })
  // }
