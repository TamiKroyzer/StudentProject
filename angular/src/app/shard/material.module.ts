import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
  ],
  imports: [
    // BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    // mat-label
  ],
  exports:[MatTableModule]
//   providers: [StudentService],
//   bootstrap: [AppComponent],

})
export class MaterialModule { }
