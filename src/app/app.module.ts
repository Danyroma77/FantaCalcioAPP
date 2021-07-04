import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { LoginComponent } from './user/login/login.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { StatusComponent } from './user/status/status.component';
import { LandingComponent } from './core/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './land/message/message.component';
import { LeagueComponent } from './land/league/league.component';
import { ResultsComponent } from './land/results/results.component';
import { AdminComponent } from './land/admin/admin.component';
import { TrainingComponent } from './land/training/training.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    SigninComponent,
    SignupComponent,
    StatusComponent,
    LandingComponent,
    MessageComponent,
    LeagueComponent,
    ResultsComponent,
    AdminComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
