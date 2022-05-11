import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() configs:any;
  @Input() imgid:any;
  imgUrl: any;

  // courseTittle='Git as a DevOps tool';
  currentDate= new Date;
  // courseDetails = {
  //   title:'mern and mean',
  //   price: 25000,
  //   duration:'3-month'
  // }

//  card1= [
//     {
//       title: 'git ass devops tool',
//       text: 'Learnlytica',
//       prize: '₹1499',     
//       imagelink: 'https://dz8fbjd9gwp2s.cloudfront.net/courses/61aa18860cf26833c8eca46c/61aa18860cf26833c8eca46c_scaled_cover.jpg?v=1'
//     },
//     {
//       title: 'devops automation',
//       text: 'Learnlytica',
//       prize: '₹1399',
//       imagelink: 'https://dz8fbjd9gwp2s.cloudfront.net/courses/61aa193f0cf272b4d2eef49a/61aa193f0cf272b4d2eef49a_scaled_cover.jpg?v=1' 

//     },
//     {
//       title: 'chef as a devops tool',
//       text: 'Learnlytica',
//       prize: '₹1399',
//       imagelink: 'https://dz8fbjd9gwp2s.cloudfront.net/courses/61aaffed0cf2a71c5139fc7c/61aaffed0cf2a71c5139fc7c_scaled_cover.jpg?v=1'
//     },
//     {
//       title: 'using jenkins for devops',
//       text: 'Learnlytica',
//       prize: '₹1499',      
//       imagelink: 'https://dz8fbjd9gwp2s.cloudfront.net/courses/61ab04c30cf272041d78452f/61ab04c30cf272041d78452f_scaled_cover.jpg?v=1'
//     }
//   ];


  constructor(private myConfig: ConfigService) { }

  ngOnInit(): void {
    this.imgUrl = `https://dz8fbjd9gwp2s.cloudfront.net/courses/${this.imgid}/${this.imgid}_scaled_cover.jpg?v=1`;

    console.log('I am in child component');

    console.log(this.configs);
    
    // this.myConfig.getCourseConfig().subscribe(
    //   (val) => {
    //     console.log(val)
    //   });
  }

}