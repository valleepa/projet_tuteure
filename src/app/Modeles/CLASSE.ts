import {User} from "./USER";

export interface IClasse {
  id:number;
  nomClasse: string;
  professeurs: User[];
  estmaclasse: Boolean;
}

export class Classe implements IClasse {
  public id:number;
  public nomClasse: string;
  public professeurs: User[];
  public estmaclasse: Boolean = false;
  constructor(id:number, nomClasse:string, professeurs:User[]) {
    this.id = id;
    this.nomClasse =  nomClasse;
    this.professeurs = professeurs;
  }
}
