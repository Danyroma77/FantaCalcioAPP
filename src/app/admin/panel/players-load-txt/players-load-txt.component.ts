import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/models/login';
import { PlayersGradesService } from 'src/app/services/players-grades.service';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'mdg-players-load-txt',
  templateUrl: './players-load-txt.component.html',
  styleUrls: ['./players-load-txt.component.css']
})
export class PlayersLoadTXTComponent implements OnInit {
  status: Status = 'initial';
  statusUpload: Status = 'initial';
  messageUpload: string;
  fAddCSV: FormGroup;
  fileName: File;
  
  fileContent: any;

  constructor(private playersGradesService: PlayersGradesService,
    private playersService: PlayersService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fAddCSV = this.fb.group(
      {
        'listElement': ['', Validators.required]
      }
    );

    
    this.playersGradesService.checkGradesSeasonActive().pipe().subscribe(
      (data) => { this.status = 'success' },
      (error) => this.status = 'error'
    );
  }

  csvInputChange(fileInputEvent: any) {
    
    this.fileName = fileInputEvent.target.files[0];
    
    return new Promise<string>((resolve, reject) => {
      if (!this.fileName) {
          resolve('');
      }

      const reader = new FileReader();

      reader.onload = (e) => {
          const text = reader.result.toString();
          resolve(text);
        this.fileContent = text;
      };

      reader.readAsText(this.fileName);
  });    
    
  }

  saveFile() {

    this.playersService.pushList(this.fileContent).pipe().subscribe(
      (data)=> console.log("CARICATO"),
      (error) => console.log("Error => " + error.message)
    );

  }
}
