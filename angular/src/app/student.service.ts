import { Injectable } from '@angular/core';
import { StudentModel, TypeMin } from './model/student.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class StudentService {
    constructor(private _http:HttpClient) { }
   urlStudents:string="https://localhost:44315/Students/" ;

   
    myStudent:any;
    GetDetailStudent(cureentId: number):Observable<StudentModel>{
        return this._http.get<StudentModel>(this.urlStudents+'GetStudentById?id='+cureentId)
    }
 
    GetAllStudent():Observable<StudentModel[]>{
        return this._http.get<StudentModel[]>(this.urlStudents+'GetStudentList');
    }
    GetSearch(mySearc: string): Observable<StudentModel[]> {
        return this._http.get<StudentModel[]>(this.urlStudents+'GetFilter?mySearc='+mySearc)
    
      }
}