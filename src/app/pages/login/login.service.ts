import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserContextService } from '../../helpers/services/user-context.service';
import { map, Observable, of, tap } from 'rxjs';
import { AppService } from '../../helpers/services/service';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends AppService {
  constructor(
    public _http: HttpClient,
    private _userContextService: UserContextService
  ) {
    super('auth', _http, _userContextService);
  }

  signin(body: any): Observable<any> {
    const url = `${this.getServerAPI()}+/signin`;
    return this._http.post(url, body, this.getHttpHeaderOptions());
  }

  signup(body: any): Observable<any> {
    const url = `${this.getServerAPI()}+/local/signup`;
    return this._http.post(url, body, this.getHttpHeaderOptions());
  }
}
