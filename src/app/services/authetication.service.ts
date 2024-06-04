import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../common/user';
import { Jwtclient } from '../common/jwtclient';
import { Userdto } from '../common/userdto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl : string = 'http://localhost:8081/api/security';

  constructor(private httpClient : HttpClient) { }


  register(user : User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl+"/register", user);
  }

  login(userDto:Userdto):Observable<Jwtclient>{
    return this.httpClient.post<Jwtclient>(this.apiUrl+"/login", userDto);

  }

}

