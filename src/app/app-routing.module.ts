import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./Pages/accueil/accueil.component";
import {CreationQCMComponent} from "./Pages/creation-qcm/creation-qcm.component";

const routes: Routes = [
  { path : '', component: AccueilComponent},
  { path : 'accueil', component: AccueilComponent},
  { path : 'mesqcm', component: AccueilComponent},
  { path : 'etudiants', component: AccueilComponent},
  { path : 'statistiques', component: AccueilComponent},
  { path : 'creation/:name', component: CreationQCMComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
