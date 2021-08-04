import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonusManagerComponent } from './admin/bonus-manager/bonus-manager.component';
import { DashComponent } from './admin/dash/dash.component';
import { GradesManagerComponent } from './admin/grades-manager/grades-manager.component';
import { LogManagerComponent } from './admin/log-manager/log-manager.component';
import { MessageAdminComponent } from './admin/message-admin/message-admin.component';
import { PlayersManagerComponent } from './admin/players-manager/players-manager.component';
import { SeasonManagerComponent } from './admin/season-manager/season-manager.component';
import { TeamsManagerComponent } from './admin/teams-manager/teams-manager.component';
import { UsersManagerComponent } from './admin/users-manager/users-manager.component';
import { LandingComponent } from './core/landing/landing.component';
import { DashGameComponent } from './game/dash-game/dash-game.component';

import { HomeComponent } from './land/home/home.component';
import { DashleagueComponent } from './league/dashleague/dashleague.component';
import { SearchComponent } from './league/search/search.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'landing', component:HomeComponent,
    children:[
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'home',component:LandingComponent}
    
    ]},
  {path:'profile', component:ProfileComponent},
  {path:'dashGame', component:DashGameComponent,
    children: [
      {path:'', redirectTo:'dashleague', pathMatch:'full'},
      {path:'dashleague', component:DashleagueComponent},
      {path:'searchleague', component:SearchComponent}
    ]
      },
  {path:'dashAdmin', component:DashComponent, 
    children: [
      {path:'', redirectTo:'seasonManager',pathMatch:'full'},
      {path: 'seasonManager', component: SeasonManagerComponent},
      {path:'playersManager',component:PlayersManagerComponent},
      {path:'teamsManager', component:TeamsManagerComponent},
      {path:'logApp', component: LogManagerComponent},
      {path:'msgAdmin', component:MessageAdminComponent},
      {path:'userManager', component: UsersManagerComponent},
      {path:'bonusmalus',component:BonusManagerComponent},
      {path:'grades', component: GradesManagerComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
