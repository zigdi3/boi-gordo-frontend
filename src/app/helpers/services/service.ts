import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserContextService } from './user-context.service';
import { Observable, of } from 'rxjs';
import { APP_CONFIG } from '../../../assets/config/app.config';

export class AppService {
  private resource!: string;
  private http: HttpClient;
  private userContext: UserContextService;
  // public request: any = {
  //   get(base: string, uri: string, options: any): Observable<any> {
  //     return of(null);
  //   },
  //   api: {
  //     get(uri: string, options: any): Observable<any> {
  //       return of(this.request.get(APP_CONFIG.API_SERVER, uri, options));
  //     },
  //   },
  // };

  constructor(
    resource: string,
    http: HttpClient,
    userContext: UserContextService
  ) {
    this.resource = resource;
    this.http = http;
    this.userContext = userContext;
    // this.request.get = (
    //   base: string,
    //   uri: string,
    //   options: any
    // ): Observable<any> => {
    //   return this.http.get(`${base}${uri}`, options);
    // };
  }

  getUserContext(): UserContextService {
    return this.userContext;
  }

  getHttp(): HttpClient {
    return this.http;
  }

  getApi() {
    return `${APP_CONFIG.API_SERVER}`;
  }

  getServerAPI() {
    return `${APP_CONFIG.API_SERVER}/${this.resource}`;
  }

  getHttpHeaderOptions(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return { headers: httpOptions.headers };
  }

  getHttpHeaderOptionToken(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${this.userContext.getToken()}`,
      }),
    };
    return httpOptions;
  }
  getHttpHeaderOptionMultipart(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.userContext.getToken()}`,
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return httpOptions;
  }

  getHttpHeaderAutenticacaoApi(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        apiKey:
          'feVUrA7zpYppUTX29TuuY5zwqiwPhsOlhGbRckGO5rDyG5Z8A61cvGAgXHSFBQH2LeW7LiDp375qZKZGhfqEQ1Lk1vKTU4q1SOkTdzxzIQrN9nKjfqbIBvj36svYpwRP',
      }),
    };
    return httpOptions;
  }

  requestGET(uri: string, params?: any): Observable<any> {
    const options = this.getHttpHeaderOptionToken();
    if (!!params) {
      options.params = new HttpParams().set(params.key, params.value);
    }
    return this.http.get(`${APP_CONFIG.API_SERVER}${uri}`, options);
  }
}
