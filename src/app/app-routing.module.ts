import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./Pages/accueil/accueil.component";
import {CreationQCMComponent} from "./Pages/creation-qcm/creation-qcm.component";
import {MesQCMComponent} from "./Services/mes-qcm/mes-qcm.component";
import {MesEtudiantsComponent} from "./Pages/mes-etudiants/mes-etudiants.component";
import {CreationQuestionsComponent} from "./Component/Creation/creation-questions/creation-questions.component";
import {CreationParametresComponent} from "./Component/Creation/creation-parametres/creation-parametres.component";
import {CreationEditionsComponent} from "./Component/Creation/creation-editions/creation-editions.component";
import {ConnexionComponent} from "./Component/Connexion/connexion.component";
import {AuthGuard} from "./auth/auth.guard";
import {GestionUsersComponent} from "./Component/gestion-users/gestion-users.component";
import {AdminGuard} from "./auth/auth-admin.guard";
import {NewUserComponent} from "./Component/gestion-users/new-user/new-user.component";
import {EditUserComponent} from "./Component/gestion-users/edit-user/edit-user.component";
import {EditUserActionComponent} from "./Component/gestion-users/edit-user/edit-user-action/edit-user-action.component";
import {RemoveUserComponent} from "./Component/gestion-users/remove-user/remove-user.component";
import {ResetPasswordComponent} from "./Component/gestion-users/reset-password/reset-password.component";

const routes: Routes = [
  { path : '', component: AccueilComponent,canActivate: [ AuthGuard ]},
  { path : 'accueil', component: AccueilComponent,canActivate: [ AuthGuard ]},
  { path : 'mesqcm', component: MesQCMComponent,canActivate: [ AuthGuard ]},
  { path : 'etudiants', component: MesEtudiantsComponent,canActivate: [ AuthGuard ]},
  { path : 'statistiques', component: ConnexionComponent,canActivate: [ AuthGuard ]},
  { path : 'login', component: ConnexionComponent},
  { path : 'users', component: GestionUsersComponent,canActivate: [ AuthGuard , AdminGuard ],
    children:[
      {path : 'new', component: NewUserComponent,canActivate: [ AuthGuard , AdminGuard]},
      {path : 'edit', component: EditUserComponent,canActivate: [ AuthGuard,AdminGuard ]},
      {path : 'edit/:id', component: EditUserActionComponent,canActivate: [ AuthGuard,AdminGuard]},
      {path : 'remove', component: RemoveUserComponent,canActivate: [ AuthGuard,AdminGuard]},
      {path : 'reset', component: ResetPasswordComponent,canActivate: [ AuthGuard,AdminGuard ]}
    ]
  },
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
