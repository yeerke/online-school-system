import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Student } from '../models/Student'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  url:string = 'http://localhost:8080/all/student'
  constructor(private http:HttpClient) { }

  getStudents():Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  addStudent():void {
    
  }
}
