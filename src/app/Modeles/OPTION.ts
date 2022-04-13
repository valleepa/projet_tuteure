export interface IOption{
  id?: number;
  valeur: string;
  type: string;
}

export class Option implements IOption {
  id: number | undefined;
  type: string;
  valeur: string;
  constructor(type:string, valeur:string, id?:number){
    this.id = id;
    this.type = type;
    this.valeur = valeur;
  }
}
