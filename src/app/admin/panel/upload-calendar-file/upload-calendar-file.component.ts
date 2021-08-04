import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/models/login';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'mdg-upload-calendar-file',
  templateUrl: './upload-calendar-file.component.html',
  styleUrls: ['./upload-calendar-file.component.css']
})
export class UploadCalendarFileComponent implements OnInit {
  floadCSV: FormGroup;
  
  fileName: File;
  fileContent: any;

  status: Status ='initial';
  messageUpload: string;

  constructor(
    private fb: FormBuilder, private calendarService: CalendarService
  ) { }

  ngOnInit(): void {
    this.floadCSV = this.fb.group(
      {
        'listElement': ['', Validators.required]
      }
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

  save() {
    this.calendarService.pushList(this.fileContent).pipe().subscribe(
      (data)=> {
        console.log("CARICATO");
        this.status = 'success';
        this.messageUpload = 'CARICATO';
        this.floadCSV.reset();
    },
      (error) => {console.log("Error => " + error.message);
        this.status = 'error';
      this.messageUpload = error.message;}
    );
  }
}
