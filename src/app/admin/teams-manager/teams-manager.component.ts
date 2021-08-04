import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeamsService } from 'src/app/services/teams.service';
import { AddTeamComponent } from '../panel/add-team/add-team.component';
import { TeamFullListComponent } from '../panel/team-full-list/team-full-list.component';

@Component({
  selector: 'mdg-teams-manager',
  templateUrl: './teams-manager.component.html',
  styleUrls: ['./teams-manager.component.css']
})
export class TeamsManagerComponent implements OnInit {
  displayedColumns: string[] = ['index','name','function'];
  teamActive$ : any;
  teamNoActive$: any;
  constructor(public dialog: MatDialog,
    private teamService: TeamsService) { }

  ngOnInit(): void {
    this.loadTeams();
  }

  addTeam():void {
    const dialogRef = this.dialog.open(AddTeamComponent, { width: '650px' });

    dialogRef.afterClosed().subscribe(result => {
      this.loadTeams();
    });
  }
  fullListView(): void {
    const dialogRef = this.dialog.open(TeamFullListComponent, {width:'650px'});
    
  }

  loadTeams() {
    this.teamService.getTeamActive()
      .pipe()
      .subscribe(
        (data) => this.teamActive$ = data,
        (error) => console.log(error)
      );

    this.teamService.getTeamNoActive()
      .pipe()
      .subscribe(
        (data) => this.teamNoActive$= data,
        (error) => console.log(error)
      );

  }

  disable(element: any) {
    this.teamService.setDisableTeam(element.id).subscribe(
          (data) => {this.loadTeams()},
          (error) => {console.log(error.message.error)}
    );

  }
  able(element: any) {
    this.teamService.setAbleTeam(element.id).subscribe(
      (data) => {this.loadTeams()},
      (error) => {console.log(error.message.error)}
);
  }
}
