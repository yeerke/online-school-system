import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Student } from '../models/Students'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  private _refreshNeeds = new Subject<void>();

  get refreshNeeds() {
    return this._refreshNeeds;
  }

  url:string = 'http://localhost:8080/';
  getStudentSuffix:string = '/all/student';
  addStudentSuffix:string = '/add/student';
  constructor(private http:HttpClient) { }

  getStudents():Observable<Student[]> {
    return this.http.get<Student[]>(this.url + this.getStudentSuffix);
  }

  addStudent(student: object): void {
    this.http
    .post<object>(this.url + this.addStudentSuffix, student)
    .toPromise()
    .then(
      data => {
        this._refreshNeeds.next();
      }
    );
  }
}
