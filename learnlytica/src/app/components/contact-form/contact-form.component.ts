import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  states = ['karnataka', "Andhra Pradesh", 'Assam', 'Bihar'];

  myform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(6)]),
    address: new FormControl('', Validators.required),
    address2: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required)
  });

  constructor(private usrService: UserService) { }

  ngOnInit(): void {
  }
  getValues() {
    console.log(this.myform);

    this.usrService.submitContactDetails(this.myform.value).subscribe((data) => {
      console.log(data)
    })
  }


}
