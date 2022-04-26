import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./Pages/accueil/accueil.component";
import {CreationQCMComponent} from "./Pages/creation-qcm/creation-qcm.component";
import {MesQCMComponent} from "./Services/mes-qcm/mes-qcm.component";
import {MesEtudiantsComponent} from "./Pages/mes-etudiants/mes-etudiants.component";
import {CreationQuestionsComponent} from "./Component/Creation/creation-questions/creation-questions.component";
import {CreationParametresComponent} from "./Component/Creation/creation-parametres/creation-parametres.component";
import {CreationEditionsComponent} from "./Component/Creation/creation-editions/creation-editions.component";

const routes: Routes = [
  { path : '', component: AccueilComponent},
  { path : 'accueil', component: AccueilComponent},
  { path : 'mesqcm', component: MesQCMComponent},
  { path : 'etudiants', component: MesEtudiantsComponent},
  { path : 'statistiques', component: AccueilComponent},
  { path : 'creation/:name', component: CreationQCMComponent,
  children: [
    { path : 'questions', component: CreationQuestionsComponent},
    { path : 'parametres', component: CreationParametresComponent},
    { path : 'edition', component: CreationEditionsComponent},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
