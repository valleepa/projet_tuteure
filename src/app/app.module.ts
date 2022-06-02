import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './Component/Layout/sidebar/sidebar.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import { TopbarComponent } from './Component/Layout/topbar/topbar.component';
import { CreateComponent } from './Component/Accueil/create/create.component';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import { LayoutComponent } from './Pages/layout/layout.component';
import { InputDialogComponent } from './Component/Accueil/input-dialog/input-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CreationQCMComponent} from "./Pages/creation-qcm/creation-qcm.component";
import {RouterModule} from "@angular/router";
import { CreationTitleComponent } from './Component/Creation/creation-title/creation-title.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { CreationTabComponent } from './Component/Creation/creation-tab/creation-tab.component';
import { CreationTabTitleComponent } from './Component/Creation/creation-tab-title/creation-tab-title.component';
import { CreationQuestionsComponent } from './Component/Creation/creation-questions/creation-questions.component';
import { CreationParametresComponent } from './Component/Creation/creation-parametres/creation-parametres.component';
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import { CreationEditionsComponent } from './Component/Creation/creation-editions/creation-editions.component';
import {MesEtudiantsComponent} from "./Pages/mes-etudiants/mes-etudiants.component";
import {TableauComponent} from "./Component/tableau/tableau.component";
import { TableauEtudiantsComponent } from './Component/tableau-etudiants/tableau-etudiants.component';
import { CreationCardComponent } from './Component/Creation/creation-card/creation-card.component';
import { CreationAddComponent } from './Component/Creation/creation-add/creation-add.component';
import { CreationQuestionComponent } from './Component/Creation/creation-question/creation-question.component';
import { CreationQuestionDefautComponent } from './Component/Creation/creation-question/creation-question-defaut/creation-question-defaut.component';
import { CreationQuestionOuverteComponent } from './Component/Creation/creation-question/creation-question-ouverte/creation-question-ouverte.component';
import { CreationQuestionNumeriqueComponent } from './Component/Creation/creation-question/creation-question-numerique/creation-question-numerique.component';
import { ConnexionComponent } from './Component/Connexion/connexion.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "./Services/httpinterceptor.service";
import {MesQCMComponent} from "./Services/mes-qcm/mes-qcm.component";
import {RecentsComponent} from "./Pages/accueil/recents/recents.component";
import {BoutonComponent} from "./Component/bouton/bouton.component";
import { GestionUsersComponent } from './Component/gestion-users/gestion-users.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { NewUserComponent } from './Component/gestion-users/new-user/new-user.component';
import { EditUserComponent } from './Component/gestion-users/edit-user/edit-user.component';
import { EditUserActionComponent } from './Component/gestion-users/edit-user/edit-user-action/edit-user-action.component';
import { ValidationDialogComponent } from './Component/gestion-users/validation-dialog/validation-dialog.component';
import { ValidationModificationComponent } from './Component/gestion-users/validation-modification/validation-modification.component';
import { ProfilComponent } from './Component/tableau-etudiants/profil/profil.component';
import { MonprofilComponent } from './Pages/monprofil/monprofil.component';
import { CorrectionComponent } from './Component/correction/correction.component';
import {DialogCreateComponent} from "./Component/tableau-etudiants/dialog-create/dialog-create.component";


// import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SidebarComponent,
    TopbarComponent,
    CreateComponent,
    LayoutComponent,
    InputDialogComponent,
    CreationQCMComponent,
    CreationTitleComponent,
    CreationTabComponent,
    CreationTabTitleComponent,
    CreationQuestionsComponent,
    CreationParametresComponent,
    CreationEditionsComponent,
    MesQCMComponent,
    MesEtudiantsComponent,
    TableauComponent,
    TableauEtudiantsComponent,
    CreationCardComponent,
    CreationAddComponent,
    CreationQuestionComponent,
    CreationQuestionDefautComponent,
    CreationQuestionOuverteComponent,
    CreationQuestionNumeriqueComponent,
    ConnexionComponent,
    RecentsComponent,
    BoutonComponent,
    GestionUsersComponent,
    NewUserComponent,
    EditUserComponent,
    EditUserActionComponent,
    ValidationDialogComponent,
    ValidationModificationComponent,
    ProfilComponent,
    MonprofilComponent,
    CorrectionComponent,
    DialogCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterModule,
    MatTabsModule,
    MatProgressBarModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    MatButtonToggleModule,
    // SweetAlert2Module.forChild()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
