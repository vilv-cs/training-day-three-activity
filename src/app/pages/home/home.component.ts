import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { Login } from './login-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  isLogged: boolean;

  logins: Login = {
    username: '',
    password: ''
  };

  constructor(private _globalService: GlobalService, private route: Router) {
    this.isLogged = false;
  }

  ngOnInit(): void {
    // console.log('old value', this.logins);
    this._globalService.isLogged.subscribe(
      (logged: any) => {
        console.log('isLogged: ', logged);
        this.isLogged = logged;
      }
    );

    this._globalService.checkLogStatus();
  }

  onLogin(): void {
    // console.log('new value', this.logins);
    this._globalService.httpLogin(this.logins);
    this._globalService.onHttpLogin.subscribe(
      (response: any) => {
        const token = response.token;
        this._globalService.setToken(token);

        console.log('token from service: ', this._globalService.getToken());
        this.route.navigate(['/my-profile']);
      }
    )
  }
}
