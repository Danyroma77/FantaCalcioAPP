import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials, Status } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

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
  formLogin = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  });

  toggleVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,
    private fb: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
  }

  onSubmit() {
   // console.log('form => ' +JSON.stringify( this.formLogin.value));
    const {email , password } = this.formLogin.value;
    this.authService.login(email, password).subscribe(
      data => {
        console.log('Login Ok');

        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.router.navigateByUrl('landing');
              },
      err => {
        console.log('errore di log' + err);
        this.message = err.error.message;
        this.status = 'error';
        
      }
    );  }
}
