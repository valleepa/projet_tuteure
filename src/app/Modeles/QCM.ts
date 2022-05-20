import {Categorie, ICategorie} from "./CATEGORIE";
import { Question } from "./QUESTION";

export interface IQCM {
  id: number;
  titre: string;
  entete: string;
  isRandomized: boolean
  categories: ICategorie[];
  user: string;
}

export class QCM implements IQCM {
  categories: ICategorie[];
  entete: string;
  id: number;
  isRandomized: boolean;
  titre: string;
  user: string;
  constructor(categories: ICategorie[], entete: string, id:number, isRandomized: boolean, titre:string, user:string){
    this.categories = categories;
    this.entete = entete;
    this.id = id;
    this.isRandomized = isRandomized;
    this.titre = titre;
    this.user = user;
  }

  static createEmptyQCM() : QCM
  {
    return new QCM([],'',0,false,'null','null');
  }
}
