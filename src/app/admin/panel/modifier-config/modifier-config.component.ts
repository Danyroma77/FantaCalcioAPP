import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Status } from 'src/app/models/login';
import { ModifierService } from 'src/app/services/modifier.service';

@Component({
  selector: 'mdg-modifier-config',
  templateUrl: './modifier-config.component.html',
  styleUrls: ['./modifier-config.component.css']
})
export class ModifierConfigComponent implements OnInit {
  status: Status = 'initial';
  displayedColumns: string[] = ['gradesStart', 'gradesEnd', 'pointMy', 'pointOther','function'];
  modifierInfo$: any;
  configInfo$: any;
  fConfig: FormGroup;
  message: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string },
    private modifierService: ModifierService,
    private fb: FormBuilder) {

  }

  loadElment() {
    this.modifierService.getConfigModifier(this.data.id)
      .pipe()
      .subscribe(
        (data) => this.configInfo$ = data,
        (error) => console.log('ERROR => ' + error.message.error)
      );
  }

  ngOnInit(): void {
    this.fConfig = this.fb.group(
      {
        'gradesStart': ['', Validators.required],
        'gradesEnd': ['', Validators.required],
        'pointMy': ['', Validators.required],
        'pointOther': ['', Validators.required]
      }
    );
    this.modifierService.getSingleModifier(this.data.id).pipe()
      .subscribe(
        (data) => this.modifierInfo$ = data,
        (error) => console.log('ERROR =>' + error.message.error)
      );

    this.loadElment();
  }

  update(element) {}

  delete(element) {
    this.modifierService.deleteConfig(element.id).pipe().subscribe(
      (data)=> this.loadElment(),
      (error)=>console.log('ERROR => ' + error.message.error)
    );
  }

  save() {

    const {gradesStart,gradesEnd,pointMy,pointOther} = this.fConfig.value;
      this.modifierService.addNewConfigModifier(gradesStart,gradesEnd,pointMy,pointOther,this.data.id)
          .pipe()
          .subscribe(
              (data) => {
                this.status = 'success';
                this.fConfig.reset();
                this.loadElment();
              },
              (error) => {
                this.status = 'error';
                this.message = error.message.error
              }

          );

      
    }
    
  

}
