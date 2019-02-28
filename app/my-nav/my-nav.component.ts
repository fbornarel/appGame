import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from './../user.service';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


    username:string; 


  constructor(private breakpointObserver: BreakpointObserver, private userService : UserService) {}

  
  ngOnInit() {
    this.username = localStorage.getItem('username');   
  }
  
}
 
  