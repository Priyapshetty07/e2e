import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  constructor(private congifs:ConfigService, private myUserSrv: UserService) { }

 myTitle:String="THBS"; //custom pipe

  values:String="100$"; //custom pipe

  cList:any;

  userList: any;

  ngOnInit(): void {

    this.congifs.getCourseList().subscribe(
      (val1) => {
        // console.log(val1)
        this.cList=val1;
      }
    );

    // this.myUserSrv.getProfiles();
    this.myUserSrv.getProfiles().subscribe((result: any) => {
      this.userList = result;
    })
    
  }

}
