import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Classe} from "./Modeles/CLASSE";
import {Groupe} from "./Modeles/GROUPE";

@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  constructor(private httpClient: HttpClient) { }

  getGroupes(classe: Classe) {
    return this.httpClient.get<Groupe[]>(`/groupes/${classe.id}`).pipe((map(r=>{
      return r;
    })))
  }
}
