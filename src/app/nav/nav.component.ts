import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this._globalService.isLogged.subscribe(
      (logged: any) => {
        this.isLogged = logged;
      }
    );

    this._globalService.checkLogStatus();
  }
}
