import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MyclientgroupsComponent } from './pages/myclientgroups/myclientgroups.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PagesComponent,
    HomeComponent,
    MyprofileComponent,
    NavComponent,
    NotFoundComponent,
    MyclientgroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
