import { Component, OnInit } from '@angular/core';
import { CheeseDataStructureModel } from '../FactoryShared/CheeseDataStructure/cheese-data-structure.model';
import { DataStorageService } from '../FactoryShared/FactoryProdDatastorage/factory-prod-datastorage.service';

@Component({
  selector: 'app-factory-prod-menu',
  templateUrl: './factory-prod-menu.component.html',
  styleUrls: ['./factory-prod-menu.component.css']
})
export class FactoryProdMenu implements OnInit{

  constructor(private dataStorage: DataStorageService) {}


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

  fetchData() {

  }
  // function to make a fetch call and bring the data from server and after invoke filterCheeseDataByDate();
  // const makeFetch = (): void => { 
  //   fetchAllProdRecords()
  //   .then(data => filterDataByDate(data))
  //   .catch(error => console.log(error))
  // }

  
  ngOnInit(): void {
    this.fetchData();
  };
}






  // const [ baralosoStorage, setBaralosoStorage ] = useState<number>(0);
  // const [ comitecoStorage, setComitecoStorage ] = useState<number>(0);
  // const [ comitecoAaStorage, setComitecoAaStorage ] = useState<number>(0);
  // const [ comitecoBaStorage, setComitecoBaStorage ] = useState<number>(0);
  // const [ florAaStorage, setFlorAaStorage ] = useState<number>(0);
  // const [ florBaStorage, setFlorBaStorage ] = useState<number>(0);


  // const filterDataByDate = (data:any): void => {
  //   let baraloso = 0;
  //   let comiteco = 0;
  //   let comitecoAa = 0;
  //   let comitecoBa = 0;
  //   let florAa = 0;
  //   let florBa = 0;

  //   const dataFiltered = data.map((dataRecords: any) => {
  //     if (dataRecords.quesoname === 'Baraloso' && dataRecords.approvepord === 'Verdadero') {
  //       baraloso += dataRecords.nopieces
  //     }
  //     if (dataRecords.quesoname === 'Comiteco' && dataRecords.approvepord === 'Verdadero') {
  //       comiteco += dataRecords.nopieces
  //     }
  //     if (dataRecords.quesoname === 'Comiteco AA' && dataRecords.approvepord === 'Verdadero') {
  //       comitecoAa += dataRecords.nopieces
  //     }
  //     if (dataRecords.quesoname === 'Comiteco BA' && dataRecords.approvepord === 'Verdadero') {
  //       comitecoBa += dataRecords.nopieces
  //     }
  //     if (dataRecords.quesoname === 'Flor AA' && dataRecords.approvepord === 'Verdadero') {
  //       florAa += dataRecords.nopieces
  //     }
  //     if (dataRecords.quesoname === 'Flor BA' && dataRecords.approvepord === 'Verdadero') {
  //       florBa += dataRecords.nopieces
  //     }
  //   })
  //   setBaralosoStorage(baraloso);
  //   setComitecoStorage(comiteco);
  //   setComitecoAaStorage(comitecoAa);
  //   setComitecoBaStorage(comitecoBa);
  //   setFlorAaStorage(florAa);
  //   setFlorBaStorage(florBa);
  // }

  // const makeFetch = (): void => {
  //   fetchAllProdRecords()
  //   .then(data => filterDataByDate(data))
  //   .catch(error => console.log(error))
  // }

  // useEffect(() => {
  //   makeFetch()
  // }, [])