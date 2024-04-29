import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'boi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  menus = ['SignIn', 'Register'];
  selected = 'SignIn';
  version = environment.AppVersion;
  ngOnInit(): void {}
}
