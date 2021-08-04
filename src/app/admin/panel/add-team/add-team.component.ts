import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/models/login';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'mdg-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  fteam: FormGroup;
  status: Status = 'initial';
  message: string;
  constructor(private fb: FormBuilder,
    private teamService: TeamsService) { }

  ngOnInit(): void {
    this.fteam = this.fb.group(
      {
        'name': ['', Validators.required]
      }
    );
  }
  /*
  onNoClick(): void {
    this.dialogRef.close();
  }*/

  save() {
    let nameTeam = this.fteam.value.name;
    this.teamService.addTeam(nameTeam).pipe().subscribe(
      (data) => {
        this.status = 'success';
        this.message = 'Team inserito';
        this.fteam.reset();
        
      },
      (error) => {
        this.status = 'error'
        this.message = error.message.error;
      });

  }
    
}

