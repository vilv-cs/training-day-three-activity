import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-myclientgroups',
  templateUrl: './myclientgroups.component.html',
  styleUrls: ['./myclientgroups.component.css']
})

export class MyclientgroupsComponent implements OnInit {
  groups: any;
  clients: any;
  isLogged: boolean;

  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this._globalService.httpGetProfile();

    this._globalService.onHttpGetProfile.subscribe(
      (response: any) => {
        console.log('ito', response);

        this.groups = response.tag.groups;
        this.clients = response.tag.accounts;
      }
    );
  }
}
