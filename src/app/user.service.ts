import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  mockUrl = 'http://localhost:3000' //json-server --watch src/backend/mock-users.json


  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getUsers(): Observable<User>{
    return this.http.get<User>(this.mockUrl + '/users')
    .pipe(
      retry(1)
    )
  }

}
