import {Etudiant} from "./ETUDIANTS";

export interface IGroupe {
  id:number;
  idcreateur: number;
  nomDuGroupe: string;
  etudiants: Etudiant[];
}

export class Groupe implements IGroupe {
  public id:number;
  public idcreateur: number;
  public nomDuGroupe: string;
  public etudiants: Etudiant[];
  constructor(id:number,idCreateur:number,nomDuGroupe:string,etudiants:Etudiant[]) {
    this.id = id;
    this.idcreateur=idCreateur;
    this.nomDuGroupe=nomDuGroupe;
    this.etudiants=etudiants;
  }
}
