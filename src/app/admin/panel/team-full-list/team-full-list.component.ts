import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'mdg-team-full-list',
  templateUrl: './team-full-list.component.html',
  styleUrls: ['./team-full-list.component.css']
})
export class TeamFullListComponent implements OnInit {
  displayedColumns: string[] = ['index','name','status'];
  teamInfo$: any;
  
  constructor(
    private teamService: TeamsService
  ) { }

  ngOnInit(): void {
    this.teamService.getTeamFull()
      .pipe()
      .subscribe(
        (data) => this.teamInfo$ = data,
        (error) => console.log(error)
      );
  }



}
