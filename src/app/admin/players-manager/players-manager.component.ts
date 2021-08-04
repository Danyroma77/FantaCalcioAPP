import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlayersService } from 'src/app/services/players.service';
import { SeasonService } from 'src/app/services/season.service';
import { PlayersAddSingleComponent } from '../panel/players-add-single/players-add-single.component';
import { PlayersLoadTXTComponent } from '../panel/players-load-txt/players-load-txt.component';
import { PlayersUpdateComponent } from '../panel/players-update/players-update.component';

@Component({
  selector: 'mdg-players-manager',
  templateUrl: './players-manager.component.html',
  styleUrls: ['./players-manager.component.css']
})
export class PlayersManagerComponent implements OnInit {
  displayedColumns: string[] = ['index', 'name', 'roleplayers','idapp','team','function'];
  playersListy$: any;
  seasonInfo$: any;
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event){
    this.pageYoffset = window.pageYOffset;
  }
  constructor(private seasonService: SeasonService,
    private playersService: PlayersService, public matDialog: MatDialog,
    private scroll: ViewportScroller) { }


  loadPlayers() {
    this.playersService.getListSeasonActive().pipe().subscribe(
      (data) => this.playersListy$ = data,
      (error) => console.log('Error => ' + error.message.error)
    );
  }

  ngOnInit(): void {

    this.seasonService.getSessionActive().pipe().subscribe(
        (data) => this.seasonInfo$ = data,
        (error) => console.log('Error => ' + error.message.error)
    );
    
    this.loadPlayers();
    
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }
  openAddSingle() {
    const dialogRef = this.matDialog.open(PlayersAddSingleComponent, {width: '85%'});
    dialogRef.afterClosed().subscribe(result => {
      this.loadPlayers();
    });
  }
  openAddFile() {
    const dialogRef = this.matDialog.open(PlayersLoadTXTComponent, { width: '65%' });

    dialogRef.afterClosed().subscribe(result => {
      this.loadPlayers();      
    });
  }

  updateElement(element: any) {
    const dialogRef = this.matDialog.open(PlayersUpdateComponent, {width:'85%'});

    dialogRef.afterClosed().subscribe(
        result => this.loadPlayers()
    )

  }

}


