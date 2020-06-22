import { Component, OnInit } from '@angular/core';
import { UserAccessService } from '../../services/user-access.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usernameValue: string;
  passwordValue: string;
  notification: string;

  constructor(private userAccessSerive: UserAccessService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.userAccessSerive.login(this.usernameValue)
    .subscribe(
      password => {
          if (password[0] != this.passwordValue) {
            this.notification = 'Login or Password is incorrect';
          } else {
            this.router.navigate(['/students'])
          }
      }
    );
  }

}
