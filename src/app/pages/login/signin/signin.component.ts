import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as CryptoJs from 'crypto-js';
import { UserContextService } from '../../../helpers/services/user-context.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'boi-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private _fb: FormBuilder,
    private _userContextService: UserContextService,
    private _loginService: LoginService,
    private _router: Router
  ) {}

  ngOnInit() {
    if (this._userContextService.getToken() !== null) {
      this._router.navigate(['dashboard']);
    }
    this.initForm();
  }

  initForm() {
    this.loginForm = this._fb.group({
      email: [''],
      password: [''],
    });
  }

  signin(form: any) {
    console.log('singin');
  }

  login() {
    if (this.loginForm.valid) {
      const loginViewModel = this.loginForm.value;
      const body = {
        email: loginViewModel.email,
        password: loginViewModel.password,
      };
      const crip = CryptoJs.AES.encrypt(
        JSON.stringify(body),
        this._userContextService.getSecretKey().toString()
      );
      const loginCrip = {
        data: crip,
      };
      this._loginService.signin(loginCrip).subscribe({
        next: (response: any) => {
          this._userContextService.setToken(response.access_token);
          this._router.navigate(['dashboard']);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
