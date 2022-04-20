import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailControl: FormControl;
  passwordControl: FormControl;
  returnUrl: string;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
    this.returnUrl =
      this.activatedRoute.snapshot.queryParams.returnUrl || '/shop';
  }

  createLoginForm() {
    this.emailControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.passwordControl = new FormControl('', [Validators.required]);

    this.loginForm = new FormGroup({
      email: this.emailControl,
      password: this.passwordControl,
    });
  }

  onSubmit() {
    this.accountService.login(this.loginForm.value).subscribe(
      () => {
        this.router.navigateByUrl(this.returnUrl);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
