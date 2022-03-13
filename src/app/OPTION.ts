export interface IOption{
  id: number;
  valeur: string;
  type: string;
}

export class Option implements IOption {
  id: number;
  type: string;
  valeur: string;
  constructor(id:number, type:string, valeur:string){
    this.id = id;
    this.type = type;
    this.valeur = valeur;
  }
}
