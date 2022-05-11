import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private myHttp: HttpClient) { }

  getUserProfile() {
    return this.myHttp.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
  }

  // getProfiles() {

  //   this.myHttp.get('http://localhost:4200/api/users').subscribe((data) => {
  //     console.log(data)
  //   });
  getProfiles() {
    return this.myHttp.get('http://localhost:4200/api/users') //obs
  }

  submitContactDetails(data:any){
    return this.myHttp.post('http://localhost:4200/api/users/contact',data)

  }
}
