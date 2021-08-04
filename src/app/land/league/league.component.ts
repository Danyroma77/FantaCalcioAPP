import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LeaguenewComponent } from 'src/app/league/panel/leaguenew/leaguenew.component';
import { SeasonService } from 'src/app/services/season.service';

@Component({
  selector: 'mdg-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  seasonInfo$: any;
  
  constructor(private seasonService: SeasonService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.seasonService.getSessionActive().pipe().subscribe(
      (data) => this.seasonInfo$ = data,
      (error) => console.log('ERROR => ' + error.message.error  )
    );

  }

  openNewLeague() {
    const modalRef = this.matDialog.open(LeaguenewComponent, {width:'70%'});
  }
}
