import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { CheeseDataStructureModel } from "../CheeseDataStructure/cheese-data-structure.model";
import { map } from "rxjs/operators";
import { Firestore, collection, collectionData, doc, addDoc, deleteDoc, updateDoc } from "@angular/fire/firestore";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private firebase:Firestore) {}

  getCheeseRecords() {
    let id = 'YPUUeBo3JOynRvATDQ9u';
    // let notesCollection = collection(this.firebase, 'factory-chesse-records');

    // setDoc(doc(db, "collectionName", userID, "anotherCollectionName", documentID), ...
    // db.collection("app").document("users").collection(uid).document("notifications")
    let notesCollection = collection(this.firebase, 'factory-chesse-records/')
    const docRef = doc(this.firebase, "factory-chesse-records/", "yftq9RGp4jWNSyBZ1D6L");


    // let notesCollection = collection(this.firebase, 'factory-chesse-records/','YPUUeBo3JOynRvATDQ9u');
    return collectionData(notesCollection)
  }

  getSpecificCheeseRecord(id:string) {
    id = 'k8kYKXoJ5B2fjDnDh2bZ';
    let notesCollection = collection(this.firebase, 'factory-chesse-records'+id);
    return collectionData(notesCollection)
  }

  storeCheeseRecord(cheeseData: CheeseDataStructureModel) {
    // this.http.post<CheeseDataStructureModel>('https://fabrica-produccion-database-default-rtdb.firebaseio.com/cheese-record.json', cheeseData)
    // .subscribe(resData => {
    //   console.log(resData);
    // })
  }

  updateCheeseRecord() {
    const docRef = doc(this.firebase, "factory-chesse-records/", "yftq9RGp4jWNSyBZ1D6L");

    const data = {
      cheeseName: 'Comiteco AA',
      cheeseStatus: "Entrada",
      cheeseAvailability: true,
      piecesNo: 145,
      piecesOutNo: 0,
      weight: 0,
      currentWeight: 0,
      potsNo: 14,
      dateIn: "2023-08-10",
      dateOut: '',
      price: 0,
      approveProd: 'Verdadero',
      loteNo: 2,
      refrigerationType: "Chica"
    };

    updateDoc(docRef, data)
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
