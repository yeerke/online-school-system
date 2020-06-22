import { Component, OnInit } from '@angular/core';
import { UserAccessService } from '../../services/user-access.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.css']
})
export class UserAuthenticationComponent implements OnInit {
  usernameValue: string;
  passwordValue: string;
  notification: string;

  constructor(private userAccessSerive: UserAccessService, private router: Router) { }

  ngOnInit(): void {

  }

  register(): void{
    this.userAccessSerive.register({
      'username': this.usernameValue,
      'password': this.passwordValue
    }).subscribe(
      isRegistered => {
        console.log("wooorks");
          if (!isRegistered) {
            this.notification = 'Username already exist, try another one';
          } else {
            this.router.navigate(['/login']);
          }
      }
    );
  }
}
