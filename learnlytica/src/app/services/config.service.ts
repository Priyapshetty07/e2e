import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private myHttp: HttpClient) {
  }

  getCourseConfig() {
    return this.myHttp.get('https://httpstat.us/200');
  }

  getCourseList() {
    return this.myHttp.get('assets/mock-data/courses-list.json');
  }
}
