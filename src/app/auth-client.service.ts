import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthClientService {

  private baseUrl: string = "https://localhost:7178/api/User/"
  constructor(
    private http: HttpClient
  ) { }

  signup(userObj: any){
    return this.http.post<any>(`${this.baseUrl}register`, userObj)
  }

  login(loginObj:any){
    //return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj)
    return this.http.post<any>(this.baseUrl+'authenticate', loginObj);
  }
}
