import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Status } from 'src/app/models/login';
import { ModifierService } from 'src/app/services/modifier.service';
import { RoleplayersService } from 'src/app/services/roleplayers.service';

@Component({
  selector: 'mdg-modifier-edit',
  templateUrl: './modifier-edit.component.html',
  styleUrls: ['./modifier-edit.component.css']
})
export class ModifierEditComponent implements OnInit {

  fAddModifier: FormGroup;
  rolePlayerList$: any;
  status: Status = 'initial';
  message: string;
  modifierInfo$: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string},
        private fb: FormBuilder, private rolePlayerService: RoleplayersService,
        private modifierService: ModifierService
    ) { }

  ngOnInit(): void {

    
    this.rolePlayerService.getListRole()
        .pipe()
        .subscribe(

          (data) =>{ this.rolePlayerList$ = data;
                    console.log("ROLEPLAYER => " + data)}
        );

    this.modifierService.getSingleModifier(this.data.id).pipe()
      .subscribe(
        (data) => this.modifierInfo$ = data,
        (error) => console.log('ERROR =>' + error.message.error)
      );

      this.fAddModifier = this.fb.group(
        {'description': ['',Validators.required],
        'roleplayer':['',Validators.required ]}
      );
  

  }

  save() {
    let {description,roleplayer} = this.fAddModifier.value;
    
      this.modifierService.updateModifier(description,roleplayer,this.data.id).pipe().subscribe(
        (data) => {
          this.status = 'success';
          this.message = 'Modificatore Aggiornato';
          this.fAddModifier.reset();
        },
        (error) => {
          this.status = 'error'
          this.message = error.message.error;
        });
  }
}
