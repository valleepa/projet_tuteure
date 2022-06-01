import {Categorie, ICategorie} from "./CATEGORIE";
import { Question } from "./QUESTION";

export interface IQCM {
  id?: number;
  titre: string;
  entete: string;
  isRandomized: boolean
  categories: ICategorie[];
  idcreateur: string;
}

export class QCM implements IQCM {
  categories: ICategorie[];
  entete: string;
  id: number | undefined;
  isRandomized: boolean;
  titre: string;
  idcreateur: string;
  constructor(categories: ICategorie[], entete: string, isRandomized: boolean, titre:string, idcreateur:string, id?:number){
    this.categories = categories;
    this.entete = entete;
    this.isRandomized = isRandomized;
    this.titre = titre;
    this.idcreateur = idcreateur;
    this.id = id;
  }

  static createEmptyQCM() : QCM
  {
    return new QCM([],'',false,"null",'null1',);
  }
}
