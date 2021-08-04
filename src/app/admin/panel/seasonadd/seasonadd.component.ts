import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SeasonService } from 'src/app/services/season.service';
import { uuidv4 } from 'src/app/utils/utils.fn';

@Component({
  selector: 'mdg-seasonadd',
  templateUrl: './seasonadd.component.html',
  styleUrls: ['./seasonadd.component.css']
})
export class SeasonaddComponent implements OnInit {
  public dialogRef: MatDialogRef<SeasonaddComponent>
  fseasonAdd: FormGroup;

  constructor(private fb: FormBuilder,
    private seasonService: SeasonService) { }

  ngOnInit(): void {
    
    this.fseasonAdd = this.fb.group(
      {
        'description': ['', Validators.required],
        'status': [1],
        'dateStart':['',Validators.required],
        'dateEnd': ['',Validators.required],
        'numEvents': ['', Validators.required]
       
      }
    );

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  closeModal():void {
    this.dialogRef.close();
  }
  save(): void {
     this.seasonService.addSeason(this.fseasonAdd.value).subscribe(
      (data) => this.onNoClick(),
      (error) => console.log("ERRORE : " + JSON.stringify(error))
     );
    // this.dialogRef.close(); 
   }
}
