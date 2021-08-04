import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SeasonService } from 'src/app/services/season.service';
import { ManageCalendarComponent } from '../panel/manage-calendar/manage-calendar.component';
import { SeasoneditComponent } from '../panel/seasonedit/seasonedit.component';
import { UploadCalendarFileComponent } from '../panel/upload-calendar-file/upload-calendar-file.component';

@Component({
  selector: 'mdg-season-manager',
  templateUrl: './season-manager.component.html',
  styleUrls: ['./season-manager.component.css']
})
export class SeasonManagerComponent implements OnInit {
  seasonInfo$: any;
  seasonTotal$: any;

  constructor(private seasonService: SeasonService,
    public dialog: MatDialog) { }
  displayedColumns: string[] = ['index', 'description', 'status', 'dateStart', 'dateEnd', 'funzioni'];

  ngOnInit(): void {
    this.loadSeason();
  }

  loadSeason(): void {

    this.seasonService.getSeasonComplete()
      .pipe()
      .subscribe(
        (data) => this.seasonInfo$ = data,
        (error) => console.log(error)
      );

  }

  changeStatus(element: any, statusType: number) {

    if (statusType===1)
    {
      this.seasonService.disableSeasonStatus(element);
    }
    else
    {
      this.seasonService.ableSeasonStatus(element);
    }

    this.loadSeason();
  }

  editSeason(element: any): void {
    const dialogRef = this.dialog.open(SeasoneditComponent, 
      { 
        data: { id: element.id },
        width: '650px' });
    dialogRef.afterClosed().subscribe(result => {
      this.loadSeason();
    });
  }
  openCalendar(): void {
    const dialogRef = this.dialog.open(ManageCalendarComponent, { width: '650px' });

    dialogRef.afterClosed().subscribe(result => {
      this.loadSeason();
    });
  }
  openDialog(): void {

    const dialogRef = this.dialog.open(UploadCalendarFileComponent, {
     
      width: '650px'
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      this.loadSeason();
    });

  }


}
