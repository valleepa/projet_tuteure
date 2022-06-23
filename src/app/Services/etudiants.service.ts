import { Injectable } from '@angular/core';
import {Etudiant} from "../Modeles/ETUDIANTS";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  etudiantActuel = new Etudiant(0, 'null', 'null', 'null', 'null', 0);
  constructor(private http: HttpClient) { }

  getEtudiantFromUser(id:string){
    return this.http.get<Etudiant[]>(`/etudiants/byUser/${id}`).pipe(map((res) => {
      return res
    }))
  }

  createEtudiant(param: { noetudiant: any; classe: any; groupe: any; nom: any; prenom: any }) {
    return this.http.post<Etudiant>('/etudiant', param).pipe(map((r) => {
      return r;
    }))
  }

  editEtudiant(etudiant: Etudiant) {
    return this.http.put<Etudiant>('/etudiant',etudiant).pipe(map(r=>{
      return r;
    }))
  }
}
