import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { UserAuthenticationComponent } from '../app/components/user-authentication/user-authentication.component';
import { ViewComponent } from 'src/app/components/view/view.component'


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: UserAuthenticationComponent},
  {path: 'students', component: ViewComponent},
  {path: '', redirectTo: '/registration', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
