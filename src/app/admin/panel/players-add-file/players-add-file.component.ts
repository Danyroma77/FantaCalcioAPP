import { Component, isDevMode, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/models/login';
import { PlayersGradesService } from 'src/app/services/players-grades.service';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'mdg-players-add-file',
  templateUrl: './players-add-file.component.html',
  styleUrls: ['./players-add-file.component.css']
})
export class PlayersAddFileComponent implements OnInit {
  status: Status = 'initial';
  statusUpload: Status = 'initial';
  messageUpload: string;
  fAddCSV: FormGroup;
  fileName: File;
 
  constructor(private playersGradesService: PlayersGradesService,
    private playersService: PlayersService,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    this.fAddCSV = this.fb.group(
      {
        'nameFile': ['', Validators.required]
      }
    );

    this.playersGradesService.checkGradesSeasonActive().pipe().subscribe(
      (data) => { this.status = 'success' },
      (error) => this.status = 'error'
    );

  }

  csvInputChange(fileInputEvent: any) {
    console.log("FILE =>" +fileInputEvent.target.files[0]);
    this.fileName = fileInputEvent.target.files[0];
    
  }

  saveFile() {

    
    this.playersService.pushFileToStorage(this.fileName).subscribe(event => {
            console.log('File is completely uploaded!');
            this.statusUpload = 'success';
            this.messageUpload = "File Caricato Correttamente!";
        },
          (error) => {
        console.log('Error => ' + error.message.error);
        this.statusUpload = 'error';
        this.messageUpload = error.message;
      });


  }
}
