import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Status } from 'src/app/models/login';
import { SeasonService } from 'src/app/services/season.service';

@Component({
  selector: 'mdg-seasonedit',
  templateUrl: './seasonedit.component.html',
  styleUrls: ['./seasonedit.component.css']
})
export class SeasoneditComponent implements OnInit {

  seasonInfo$: any;
  status: Status = 'initial';
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string},
  private seasonService: SeasonService) { }

  ngOnInit(): void {
    console.log('ID => ' + this.data.id);
    this.seasonService.getSessionByID(this.data.id).pipe()
        .subscribe(
          (data) => this.seasonInfo$ = data,
          (error) => console.log("Error " + error.message)
        );
  }

}
