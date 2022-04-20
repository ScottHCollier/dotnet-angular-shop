import { Component, OnInit } from '@angular/core';
import {
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { map, of, switchMap, timer } from 'rxjs';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loading: boolean = false;
  registerForm: FormGroup;
  displayNameControl: FormControl;
  emailControl: FormControl;
  passwordControl: FormControl;
  confirmPasswordControl: FormControl;
  errors: string[];

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.displayNameControl = new FormControl('', [Validators.required]);

    this.emailControl = new FormControl(
      '',
      [Validators.required, Validators.email],
      [this.validateEmailNotTaken()]
    );

    this.passwordControl = new FormControl('', [Validators.required]);

    this.confirmPasswordControl = new FormControl('', [Validators.required]);

    this.registerForm = new FormGroup({
      displayName: this.displayNameControl,
      email: this.emailControl,
      password: this.passwordControl,
      confirmPassword: this.confirmPasswordControl,
    });
  }

  onSubmit() {
    if (
      this.registerForm.value.password !==
      this.registerForm.value.confirmPassword
    ) {
      this.errors = ['Passwords must match'];
    } else {
      this.accountService.register(this.registerForm.value).subscribe(
        (response) => {
          this.router.navigateByUrl('/shop');
        },
        (error) => {
          this.errors = error.errors;
        }
      );
    }
  }

  validateEmailNotTaken(): AsyncValidatorFn {
    return (control) => {
      return timer(500).pipe(
        switchMap(() => {
          if (!control.value) {
            return of(null);
          }

          return this.accountService.checkEmailExists(control.value).pipe(
            map((res) => {
              return res ? { emailAlreadyExists: true } : null;
            })
          );
        })
      );
    };
  }
}
