import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  register(username: string, password: string,  firstname: string, lastname: string, birthdate: Date): Observable<any> {
    return this.http.post(API_URL + 'register', {
      username,
      password,
      firstname,
      lastname,
      birthdate
    }, httpOptions);
  }

   addRoles(username: string): Observable<any> {
    return this.http.post(API_URL+'addAuthorities?username=' + username, { 
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
    }) 
	})
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(API_URL + 'login', {
      username,
      password
    },  {observe: 'response'});
  }

  getUser(username: string): Observable<any> {
    return this.http.get(API_URL+'user/getUser?username=' + username) 
  }

  getUserRole(username: string): Observable<any> {
    return this.http.get(API_URL+'user/getUserRole?username=' + username) 
  }
  

}
