import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { StudentListComponent } from './student-list/student-list.component';

// const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'student-list', component: StudentListComponent},
      {path: 'detail-student/:id', component: DetailStudentComponent},
       {path: '', redirectTo: '/student-list', pathMatch: 'full'},
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
