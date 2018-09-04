import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  profileForm: FormGroup = new FormGroup({
    description:  new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

}
