import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./Pages/accueil/accueil.component";
import {CreationQCMComponent} from "./Pages/creation-qcm/creation-qcm.component";
import {MesQCMComponent} from "./Pages/mes-qcm/mes-qcm.component";
import {MesEtudiantsComponent} from "./Pages/mes-etudiants/mes-etudiants.component";
import {CreationQuestionsComponent} from "./Component/Creation/creation-questions/creation-questions.component";
import {CreationParametresComponent} from "./Component/Creation/creation-parametres/creation-parametres.component";
import {CreationEditionsComponent} from "./Component/Creation/creation-editions/creation-editions.component";
import {ConnexionComponent} from "./Component/Connexion/connexion.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  { path : '', component: AccueilComponent,canActivate: [ AuthGuard ]},
  { path : 'accueil', component: AccueilComponent,canActivate: [ AuthGuard ]},
  { path : 'mesqcm', component: MesQCMComponent,canActivate: [ AuthGuard ]},
  { path : 'etudiants', component: MesEtudiantsComponent,canActivate: [ AuthGuard ]},
  { path : 'statistiques', component: ConnexionComponent,canActivate: [ AuthGuard ]},
  { path : 'login', component: ConnexionComponent},
  { path : 'creation/:name', component: CreationQCMComponent,canActivate: [ AuthGuard ],
  children: [
    { path : 'questions', component: CreationQuestionsComponent,canActivate: [ AuthGuard ]},
    { path : 'parametres', component: CreationParametresComponent,canActivate: [ AuthGuard ]},
    { path : 'edition', component: CreationEditionsComponent,canActivate: [ AuthGuard ]},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
