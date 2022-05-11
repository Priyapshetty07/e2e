import { Component, OnInit } from '@angular/core';
import { from, interval, last, of, Subscriber, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  // myObs$? : Subscription;
  // myObs2$: any;

  // obsT1 
  // onlyFirstTen

  constructor() { }

  ngOnInit(): void {
    // interval(1000).subscribe(val => console.log(`i am observables strems values: ${val}`));
    // interval(1000); 

  //   this.myObs2$=of(1, 2 , 4, 5,10 ,100);

  //   this.myObs2$.subscribe(
  //     (val:Number) => console.log(`i am of: obs stream value-> ${val}`)
  //   )
  //   from([1,60,2,20]).subscribe(
  //     (val:Number) => console.log(`i am of: obs stream value-> ${val}`)
  //   )
  // }

  // ngOnDestroy(): void{
  //   console.log('from destory')
  // this.myObs$?.unsubscribe();
  //   this.myObs2$.unsubscribe();
  // }

  const obsT1=interval(1000);

     const onlyFirstTen=obsT1.pipe(

       take(6),

       last()

     );

     onlyFirstTen.subscribe(

       (val:Number)=> console.log(`opertaion with take operator --> ${val}`)

     )
  }

}
