import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/models/login';
import { ModifierService } from 'src/app/services/modifier.service';
import { RoleplayersService } from 'src/app/services/roleplayers.service';

@Component({
  selector: 'mdg-modifier-add',
  templateUrl: './modifier-add.component.html',
  styleUrls: ['./modifier-add.component.css']
})
export class ModifierAddComponent implements OnInit {

  fAddModifier: FormGroup;
  rolePlayerList$: any;
  status: Status = 'initial';
  message: string;
  constructor(
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
    
    this.fAddModifier = this.fb.group(
      {'description': ['',Validators.required],
      'roleplayer':['',Validators.required ]}
    );

  }
  save() {
    
      let {description,roleplayer} = this.fAddModifier.value;
    
      this.modifierService.addNewModifier(description,roleplayer).pipe().subscribe(
        (data) => {
          this.status = 'success';
          this.message = 'Modificatore inserito';
          this.fAddModifier.reset();
        },
        (error) => {
          this.status = 'error'
          this.message = error.message.error;
        });

  }


}
