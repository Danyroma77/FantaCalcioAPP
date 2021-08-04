import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { authInterceptorProviders } from './_helpers/auth.interceptor';

import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
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
import { SeasonManagerComponent } from './admin/season-manager/season-manager.component';
import { SeasoneditComponent } from './admin/panel/seasonedit/seasonedit.component';
import { SeasonaddComponent } from './admin/panel/seasonadd/seasonadd.component';
import { DashComponent } from './admin/dash/dash.component';
import { LeaguenewComponent } from './league/panel/leaguenew/leaguenew.component';
import { UploadCalendarFileComponent } from './admin/panel/upload-calendar-file/upload-calendar-file.component';
import { PlayersManagerComponent } from './admin/players-manager/players-manager.component';
import { TeamsManagerComponent } from './admin/teams-manager/teams-manager.component';
import { LogManagerComponent } from './admin/log-manager/log-manager.component';
import { MessageAdminComponent } from './admin/message-admin/message-admin.component';
import { UsersManagerComponent } from './admin/users-manager/users-manager.component';
import { BonusManagerComponent } from './admin/bonus-manager/bonus-manager.component';
import { GradesManagerComponent } from './admin/grades-manager/grades-manager.component';
import { ManageCalendarComponent } from './admin/panel/manage-calendar/manage-calendar.component';
import { AddTeamComponent } from './admin/panel/add-team/add-team.component';
import { TeamFullListComponent } from './admin/panel/team-full-list/team-full-list.component';
import { ModifierAddComponent } from './admin/panel/modifier-add/modifier-add.component';
import { ModifierEditComponent } from './admin/panel/modifier-edit/modifier-edit.component';
import { ModifierConfigComponent } from './admin/panel/modifier-config/modifier-config.component';
import { PlayersAddSingleComponent } from './admin/panel/players-add-single/players-add-single.component';
import { PlayersAddFileComponent } from './admin/panel/players-add-file/players-add-file.component';
import { PlayersUpdateComponent } from './admin/panel/players-update/players-update.component';
import { PlayersGradesComponent } from './admin/panel/players-grades/players-grades.component';
import { PlayersStatisticsComponent } from './admin/panel/players-statistics/players-statistics.component';
import { PlayersLoadTXTComponent } from './admin/panel/players-load-txt/players-load-txt.component';
import { HomeComponent } from './land/home/home.component';
import { DashGameComponent } from './game/dash-game/dash-game.component';
import { SearchComponent } from './league/search/search.component';
import { ProfileComponent } from './user/profile/profile.component';
import { DashleagueComponent } from './league/dashleague/dashleague.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SigninComponent,
    SignupComponent,
    StatusComponent,
    LandingComponent,
    MessageComponent, LeagueComponent, ResultsComponent, AdminComponent, TrainingComponent,
    SeasonManagerComponent,  SeasoneditComponent,  SeasonaddComponent, DashComponent, 
    LeaguenewComponent, UploadCalendarFileComponent, PlayersManagerComponent, TeamsManagerComponent, LogManagerComponent, MessageAdminComponent, UsersManagerComponent, BonusManagerComponent, GradesManagerComponent, ManageCalendarComponent, AddTeamComponent, TeamFullListComponent, ModifierAddComponent, ModifierEditComponent, ModifierConfigComponent, PlayersAddSingleComponent, PlayersAddFileComponent, PlayersUpdateComponent, PlayersGradesComponent, PlayersStatisticsComponent, PlayersLoadTXTComponent, HomeComponent, DashGameComponent, SearchComponent, ProfileComponent, DashleagueComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,  
    BrowserAnimationsModule,   
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
