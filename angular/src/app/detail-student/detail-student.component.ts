import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentModel } from '../model/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.scss']
})
export class DetailStudentComponent implements OnInit {
  myId: number=0;
  // firstName: string="tami";
  // firstName: string="tami";
  myStudent!: StudentModel ;
  constructor(private _route:ActivatedRoute,private _studentService:StudentService) { }
  ngOnInit(): void {
    this.myId=Number(this._route.snapshot.paramMap.get('id'));
    this._studentService.GetDetailStudent(this.myId).subscribe(x=>{
this.myStudent=x;
console.log(this.myStudent);

    })
    // this.myStudent=this._studentService.GetDetailStudent(this.myId);
    console.log(this.myStudent)
   }
}
