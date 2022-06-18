import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Classe} from "../Modeles/CLASSE";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private httpClient: HttpClient) { }

  getClasses() {
    return this.httpClient.get<Classe[]>("/classes").pipe((map(res=>{
      return res;
    })))
  }

  getClassesFromUser(id:number) {
    return this.httpClient.get<Classe[]>(`/classes/${id}`).pipe((map(res=>{
      return res;
    })))
  }

  ownClasse(classe: Classe) {
    return this.httpClient.put<Classe>(`/classe/${classe.id}`,classe).pipe((map((r)=>{
      return r;
    })))
  }
}
