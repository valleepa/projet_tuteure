import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import { TopbarComponent } from './topbar/topbar.component';
import { CreateComponent } from './create/create.component';
import { ModifyComponent } from './modify/modify.component';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import { LayoutComponent } from './layout/layout.component';
// import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SidebarComponent,
    TopbarComponent,
    CreateComponent,
    ModifyComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule
    // SweetAlert2Module.forChild()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
