import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-component/login-component.component';
import {AuthenticationService} from "./authentication.service";
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RecordsComponent } from './records/records.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CatCardComponent,
    NavBarComponent,
    RecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
