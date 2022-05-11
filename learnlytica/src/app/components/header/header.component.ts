import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private myDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLoginDialog(){
    const dialRef =this.myDialog.open(LoginComponent,{height:'400px',width:'600px',disableClose:true});
    dialRef.afterClosed().subscribe(result=> {
      console.log(`dialog result:${result}`);
    });
  }

}
