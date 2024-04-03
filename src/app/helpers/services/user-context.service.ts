import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwt from 'jwt-decode';
import { IToken } from './interface/token.interface';

@Injectable({
  providedIn: 'root',
})
export class UserContextService {
  /**
   *
   */
  constructor(private _http: HttpClient) {}

  setToken(token: any): void {
    localStorage.setItem('token', token);
    const payload: any = jwt.jwtDecode(token);
    localStorage.setItem(
      'email',
      JSON.stringify(JSON.stringify(payload.email))
    );
  }
  getSecretKey() {
    return 'serverboi2020';
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
