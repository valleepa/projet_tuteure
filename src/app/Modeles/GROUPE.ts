import {Etudiant} from "./ETUDIANTS";
import {User} from "./USER";
import {Classe} from "./CLASSE";

export interface IGroupe {
  id:number;
  nomGroupe: string;
  professeurs: User[];
  classe: Classe;
  estmongroupe: Boolean;
}

export class Groupe implements IGroupe {
  public id:number;
  public nomGroupe: string;
  public professeurs: User[];
  public classe: Classe;
  public estmongroupe: Boolean = false;
  constructor(id:number,nomGroupe:string,professeurs:User[],classe:Classe) {
    this.id = id;
    this.nomGroupe=nomGroupe;
    this.professeurs=professeurs;
    this.classe=classe;
  }
}
