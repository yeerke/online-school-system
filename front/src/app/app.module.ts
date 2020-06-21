import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './components/view/view.component';
import { StudentComponent } from './components/student/student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditButtonsComponent } from './components/edit-buttons/edit-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    StudentComponent,
    AddStudentComponent,
    EditButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
