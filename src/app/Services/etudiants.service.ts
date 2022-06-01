import { Injectable } from '@angular/core';
import {Etudiant} from "../Modeles/ETUDIANTS";

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  etudiantActuel = new Etudiant(0, 'null', 'null', 'null', 'null', 0);
  constructor() { }
}
