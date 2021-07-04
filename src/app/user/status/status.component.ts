import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/models/login';

@Component({
  selector: 'mdg-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  @Input() status: Status = 'initial';
  constructor() { }

  ngOnInit(): void {
  }

}
