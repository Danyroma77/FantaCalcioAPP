import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/models/login';

@Component({
  selector: 'mdg-leaguenew',
  templateUrl: './leaguenew.component.html',
  styleUrls: ['./leaguenew.component.css']
})
export class LeaguenewComponent implements OnInit {
  fNewLeague: FormGroup;
  status: Status= 'initial';
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fNewLeague = this.fb.group(
      {
        name: ['',Validators.required],
        numberGamer: ['',Validators.required],
        money: ['', Validators.required ],
        playersForTeam: ['', Validators.required],
        isPrivateLeague:['', Validators.required],
        typeAuction: ['', Validators.required]
      }
    );
  }

  save() {}
}
