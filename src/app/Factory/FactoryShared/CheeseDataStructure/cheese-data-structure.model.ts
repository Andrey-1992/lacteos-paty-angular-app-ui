export class CheeseDataStructureModel {
  constructor(
    public id?: number,
    public cheeseName?: string,
    public cheeseStatus?: string,
    public cheeseAvailability?: boolean,
    public piecesNo?: number,
    public piecesOutNo?: number,
    public weight?: number,
    public currentWeight?: number,
    public potsNo?: number,
    public dateIn?: string,
    public dateOut?: string ,
    public price?: number,
    public approveProd?: string,
    public loteNo?: number
  ) {}
};