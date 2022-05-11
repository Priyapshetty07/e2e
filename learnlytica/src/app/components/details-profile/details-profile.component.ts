import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-profile',
  templateUrl: './details-profile.component.html',
  styleUrls: ['./details-profile.component.css']
})
export class DetailsProfileComponent implements OnInit {

  prdName: String = '';
  qParam: any;

  constructor(private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsData => this.prdName = paramsData['pid']); 
    this.activatedRoute.queryParams.subscribe(paramsData => this.qParam = paramsData);
  

   
  }

}
