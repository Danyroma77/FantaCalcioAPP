import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SeasonaddComponent } from 'src/app/admin/panel/seasonadd/seasonadd.component';
import { SeasonService } from 'src/app/services/season.service';

@Component({
  selector: 'mdg-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  seasonInfo$: any;
  constructor(private seasonService: SeasonService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadSeason();
  }

  loadSeason(): void {
    
    this.seasonService.getSessionActive()
        .pipe()
        .subscribe(
          (data) => this.seasonInfo$ = data,
          (error) => console.log(error)
        );
  }
  openDialog(): void {

    const dialogRef = this.dialog.open(SeasonaddComponent, {
      width: '650px'
     }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');  
      this.loadSeason();
    });

  }

}
