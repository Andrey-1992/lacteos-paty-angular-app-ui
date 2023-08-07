export class CheeseDataStructureModel {
  constructor(
    public id?: number,
    public quesoname?: string,
    public quesostatus?: string,
    public quesoavailability?: boolean,
    public nopieces?: number,
    public nopiecessalida?: number,
    public weigth?: number,
    public weigthcurrent?: number,
    public holladas?: number,
    public datein?: string,
    public dateout?: string ,
    public price?: number,
    public approvepord?: string,
    public lotenum?: string
  ) {}
};