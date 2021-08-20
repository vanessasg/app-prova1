import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //mockUrl = 'http://localhost:3000' //json-server --watch src/backend/mock-users.json
  mockUrl = 'https://raw.githubusercontent.com/vanessasg/table-and-chart-angular/master/src/assets/mock-users2.json';

  constructor(private http: HttpClient) {  }
/*
  HttpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
*/
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.mockUrl) ///users
    .pipe(
      retry(3) //riprova 3 volte se la richiesta non va a buon fine
    )
  }

}
