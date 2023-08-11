export class CheeseDataStructureModel {
  constructor(
    public id?: number,
    public quesoname?: string,
    public quesostatus?: string,
    public quesoavailability?: boolean,
    public piecesNo?: number,
    public piecesOutNo?: number,
    public weigth?: number,
    public weigthcurrent?: number,
    public potsNo?: number,
    public datein?: string,
    public dateout?: string ,
    public price?: number,
    public approvepord?: string,
    public lotenum?: number
  ) {}
};