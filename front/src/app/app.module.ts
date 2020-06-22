import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewComponent } from './components/view/view.component';
import { StudentComponent } from './components/student/student.component';
import { EditButtonsComponent } from './components/edit-buttons/edit-buttons.component';
import { AddStudentDialogComponent } from './components/add-student-dialog/add-student-dialog.component';
import { UserAuthenticationComponent } from './components/user-authentication/user-authentication.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    StudentComponent,
    EditButtonsComponent,
    AddStudentDialogComponent,
    UserAuthenticationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  entryComponents: [AddStudentDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
