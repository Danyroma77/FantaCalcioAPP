import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';
import { RoleplayersService } from 'src/app/services/roleplayers.service';
import { SeasonService } from 'src/app/services/season.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'mdg-players-add-single',
  templateUrl: './players-add-single.component.html',
  styleUrls: ['./players-add-single.component.css']
})
export class PlayersAddSingleComponent implements OnInit {

  fPlayer: FormGroup;
  rolePlayerList$: any;
  teamActive$: any;
  seasonActive$: any;

  constructor(private fb: FormBuilder,private rolePlayerService: RoleplayersService,
    private teamService: TeamsService, private playerService: PlayersService,
    private seasonService: SeasonService ) { }


  ngOnInit(): void {
    this.rolePlayerService.getListRole()
    .pipe()
    .subscribe(
      (data) =>{ this.rolePlayerList$ = data;
                }
    );
    
    this.teamService.getTeamActive().pipe()
                .subscribe(
                  (data) => this.teamActive$ = data
                );
    
    this.seasonService.getSessionActive().pipe()
                  .subscribe(
                    (data) => this.seasonActive$ = data
                  );
    this.fPlayer = this.fb.group(
      {
        'orderID': ['', Validators.required],
        'name': ['', Validators.required],
        'teamID': ['', Validators.required],  
        'quotas': ['', Validators.required],
        'roleplayersID': ['', Validators.required]
      }
    );
  }
  save() { 
    const {orderID, name, teamID,quotas,roleplayersID} = this.fPlayer.value;
    this.playerService.addNewPlayer(orderID, name, teamID,quotas,roleplayersID,this.seasonActive$.id).pipe().subscribe(
      (data)=>console.log("SALVATO"),
      (error) => console.log("Error " + error.message)
    );

  }
}
