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
export class UserService {

  constructor(private http: HttpClient) { }

  getAllFlats(): Observable<any> {
    return this.http.get(API_URL+'flat/getall') 
  }

  getPayments(id: number, email: string, enabled: boolean,  firstname: string, lastname: string, birthdate: Date): Observable<any> {
    return this.http.post(API_URL + 'payment/getByUser', {
      id,
      email,
      enabled,
      firstname,
      lastname,
      birthdate
    }, httpOptions);
  }
}
