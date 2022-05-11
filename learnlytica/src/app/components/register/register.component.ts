import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myform:FormGroup = new FormGroup({
      email:new FormControl(),
      password:new FormControl(),
      fname:new FormControl(),
      lname:new FormControl(),
  })

  constructor() { }

  ngOnInit(): void {
  }
  getValues2() {
    alert(this.myform);
  }
}
