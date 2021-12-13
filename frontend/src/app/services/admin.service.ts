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
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(API_URL+'user/getall') 
  }

//Buildings

  getAllBuildings(): Observable<any> {
    return this.http.get(API_URL+'building/getall') 
  }

  getBuilding(id: number): Observable<any> {
    return this.http.get(API_URL + `building/getById/${id}`);
  }

  addBuilding(name: string, address: string): Observable<any> {
    return this.http.post(API_URL + 'building/add', {
      name,
      address
    }, httpOptions);
  }

  updateBuilding(id: number, name: string, address: string): Observable<any> {
    return this.http.put(API_URL + 'building/edit', {
      id,
      name,
      address
    }, httpOptions);
  }

  deleteBuilding(id: number): Observable<any> {
    return this.http.delete(API_URL + `building/delete/${id}`);
  }


//Flats

  getAllFlats(): Observable<any> {
    return this.http.get(API_URL+'flat/getall') 
  }

  getFlat(id: number): Observable<any> {
    return this.http.get(API_URL + `flat/getById/${id}`);
  }

  addFlat(name: string, number: number, building: any, user: any): Observable<any> {
    return this.http.post(API_URL + 'flat/add', {
      name,
      number,
      building,
      user
    }, httpOptions);
  }

  updateFlat(id: number, name: string, number: number, building: any, user: any): Observable<any> {
    return this.http.put(API_URL + 'flat/edit', {
      id,
      name,
      number,
      building,
      user
    }, httpOptions);
  }

  deleteFlat(id: number): Observable<any> {
    return this.http.delete(API_URL + `flat/delete/${id}`);
  }

  //Payments

  getAllPayments(): Observable<any> {
    return this.http.get(API_URL+'payment/getall') 
  }

  addPayment(user: any, flat: any, amount: number, description: string): Observable<any> {
    return this.http.post(API_URL + 'payment/add', {
      user,
      flat,
      amount,
      description
    }, httpOptions);
  }

  deletePayment(id: number): Observable<any> {
    return this.http.delete(API_URL + `payment/delete/${id}`);
  }

}
