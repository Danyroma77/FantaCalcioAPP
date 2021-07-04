import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Credentials, Status } from 'src/app/models/login';

@Component({
  selector: 'mdg-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isPasswordVisible = false;
  @Input() disabled = false;
  @Output() signIn = new EventEmitter<Credentials>();
  message: string;
  status: Status = 'initial';
  
  toggleVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit():boolean {

    return false;
  }
}
