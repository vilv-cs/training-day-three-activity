import { Profile } from './profile-model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})

export class MyprofileComponent implements OnInit {
  profileForm: any;
  isLogged: boolean;

  profile: Profile = {
    email: '',
    first_name: '',
    last_name: '',
    alias: '',
    job_title: '',
    mobile_number: '',
    password: ''
  }

  constructor(private _globalService: GlobalService, private route: Router) { }

  ngOnInit(): void {
    this._globalService.isLogged.subscribe(
      (logged: any) => {
        this.isLogged = logged;
      }
    );

    this._globalService.checkLogStatus();

    this._globalService.httpGetProfile();

    this._globalService.onHttpGetProfile.subscribe(
      (profile: any) => {
        console.log('This is from my profile ts', profile);
        this.fillForm(profile);
      }
    )

    this.profileForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      alias: new FormControl('', Validators.required),
      job_title: new FormControl('', Validators.required),
      mobile_number: new FormControl('', Validators.required),
      password: new FormControl(''),
      confirm_password: new FormControl('')
    });
  }

  fillForm(data: any): void {
    this.profileForm.patchValue({
      email: data.email,
      first_name: data.meta.first_name,
      last_name: data.meta.last_name,
      alias: data.alias,
      job_title: data.meta.job_title,
      mobile_number: data.meta.mobile_number
    })
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const formValues = this.profileForm.value;
      const newFormValues = {
        meta: {
          first_name: formValues.first_name,
          last_name: formValues.last_name,
          job_title: formValues.job_title,
          mobile_number: formValues.mobile_number,
          timezone: 'Asia/Manila'
        },
        email: formValues.email,
        alias: formValues.alias,
        current_password: ''
      }

      this._globalService.httpUpdateProfile(newFormValues);
    } else {
      alert('Invalid form!');
    }
  }

  onLogout(): void {
    this._globalService.deleteToken();
    this.route.navigate(['/']);
  }
}
