import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { CheeseDataStructureModel } from "../CheeseDataStructure/cheese-data-structure.model";
import { map } from "rxjs/operators";
import { Firestore, collection, collectionData, doc, addDoc, deleteDoc, updateDoc, getFirestore } from "@angular/fire/firestore";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private firebase:Firestore) {}

  getCheeseRecords() {
    let notesCollection = collection(this.firebase, "factory-chesse-records")
    return collectionData(notesCollection, {idField:'id'})
  }

  getSpecificCheeseRecord(id:string) {
    id = 'k8kYKXoJ5B2fjDnDh2bZ';
    let notesCollection = collection(this.firebase, 'factory-chesse-records/'+id);
    return collectionData(notesCollection)
  }

  storeCheeseRecord(cheeseData: CheeseDataStructureModel) {
    const db = getFirestore()
    console.log(cheeseData)
    let notesCollection = collection(this.firebase, "factory-chesse-records");
    addDoc(notesCollection, cheeseData)
  }

  updateCheeseRecord(cheeseData: any, id: any) {
    const db = getFirestore()
    const docRef = doc(db, "factory-chesse-records", id);
    updateDoc(docRef, cheeseData)
    .then(docRef => {
      console.log("A New Document Field has been added to an existing document");
    })
  }

  deleteCheeseRecord(id: any) {
    const db = getFirestore()
    const docRef = doc(db, "factory-chesse-records/"+id)
    deleteDoc(docRef)
    .then(docRef => {
      console.log("A New Document Field has been added to an existing document");
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
