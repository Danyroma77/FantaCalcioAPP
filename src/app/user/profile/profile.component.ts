import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { equalFieldsValidator } from 'src/app/utils/equal-fields.validator';
import { RegistrationErrorStateMatcher } from 'src/app/utils/registration-error-state.matcher';

@Component({
  selector: 'mdg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  fprofile: FormGroup;
  fdetails: FormGroup;

  isPasswordVisible = false;
  matcher = new RegistrationErrorStateMatcher();
  isLoggedIn = false;

  username : string; 
  userID: string;
  constructor(private tokenStorageService: TokenStorageService,
    private router: Router,private fb: FormBuilder) { }
  
  toggleVisibility(): void {
      this.isPasswordVisible = !this.isPasswordVisible;
    }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
     
      this.username = user.username;
      this.userID = user.id;
    }

    this.fprofile = this.fb.group(
    {
      email: [this.username, [Validators.email, Validators.required]],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required]
    },
    {
      validator: equalFieldsValidator('password', 'passwordRepeat')
    });

    this.fdetails = this.fb.group(
      {
        name:['',Validators.required],
        city:['',Validators.required],
        defaultNameTeam:['',Validators.required],
        urlImage:['n.d.',Validators.required]
      }
    );
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/');
   }

   saveChangePwd() {}

   updateProfile() {}
}
