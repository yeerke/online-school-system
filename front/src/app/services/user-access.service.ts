import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserAccessService {
  url:string = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  register(user: object): Observable<boolean>{
    console.log(user);
    console.log(this.url + 'registration/');
    return this.http.post<boolean>(this.url + 'registration', user);
  }

  login(username: string): Observable<String[]>{
    return this.http.get<String[]>(this.url + 'login/' + username);
  }
}
