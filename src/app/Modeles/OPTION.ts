export interface IOption{
  id?: number;
  valeur: string;
  typeOption: string;
}

export class Option implements IOption {
  id: number | undefined;
  typeOption: string;
  valeur: string;
  constructor(typeOption:string, valeur:string, id?:number){
    this.id = id;
    this.typeOption = typeOption;
    this.valeur = valeur;
  }
}
