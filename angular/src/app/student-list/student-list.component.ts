import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { StudentModel, TypeMin } from '../model/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor(private _studentService:StudentService) { }
  listStudent!:StudentModel[];
  ngOnInit(): void {
  this._studentService.GetAllStudent().subscribe(x=>{
this.listStudent=x; 
  console.log( this.listStudent);
this.listStudent.forEach(d=>{
  d.min=TypeMin[d.min as unknown as keyof typeof TypeMin]
})
  })

  }
  mySearch: string = "";
  Search() {
    this._studentService.GetSearch(this.mySearch).subscribe((x) => {
      this.listStudent = x;
      this.listStudent.forEach(x => {
        x.min = TypeMin[x.min as unknown as keyof typeof TypeMin]
      });
    });
  }
}
