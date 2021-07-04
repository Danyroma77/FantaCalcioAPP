import { Component, EventEmitter, Input, isDevMode, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Credentials, Status } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';
import { equalFieldsValidator } from 'src/app/utils/equal-fields.validator';
import { RegistrationErrorStateMatcher } from 'src/app/utils/registration-error-state.matcher';

@Component({
  selector: 'mdg-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  @Input() disabled = false;
  @Output() signUp = new EventEmitter<Credentials>();

  isPasswordVisible = false;
  matcher = new RegistrationErrorStateMatcher();
  message: string;
  status: Status = 'initial';

  registrationForm = this.fb.group(
    {
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required]
    },
    {
      validator: equalFieldsValidator('password', 'passwordRepeat')
    }
  );

  constructor(private fb: FormBuilder,
    private authService: AuthService) { }

  toggleVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  submit(): void {
    /*
    if (this.registrationForm.valid) {
      console.log('Valid! Proceed');
      this.signUp.emit(this.registrationForm.value);
    }*/
    if (this.registrationForm.valid) {
      const { email, password } = this.registrationForm.value;
      if (isDevMode) {console.log("DATI DEL FORM => " + email + " - " + password);
      console.log('form' + this.registrationForm.value);      
    }
      this.authService.register(email, password).subscribe(
        data => {
          console.log(data);
          this.status='success';
          this.message="Utente Registrato";
          this.registrationForm.reset();
        },
        error => {
          console.log(error);
          this.message = error.error.message;
          this.status = 'error';
        }

      );
    }
  }

}
