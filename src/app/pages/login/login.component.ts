import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserContextService } from '../../helpers/services/user-context.service';
import { Router } from '@angular/router';
import * as CryptoJs from 'crypto-js';
import { LoginService } from './login.service';
import { IToken } from '../../helpers/services/interface/token.interface';

@Component({
  selector: 'boi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  menus = ['SignIn', 'Register'];
  selected = 'SignIn';
  ngOnInit(): void {}
}
