import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usersList = this.userService.usersValue;
  public loginUserForm : FormGroup;
  public logUsername:void;

  constructor(
     private formBuilder: FormBuilder,
     private userService : UserService,
     private router :Router,
     ) { }

  ngOnInit() {
    this.loginUserForm = this.formBuilder.group({
      'email': ['', Validators.compose([Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
      'password':['',[ Validators.minLength(10)]],    
    }); 
  }

  public loginUserFormSubmit(){ 
    var loginValue = this.loginUserForm.value;
    var loginEmail = loginValue.email;
    var loginPwd = loginValue.password;

    for(var i= 0; i<= this.usersList.length; i++)
    {
      var email = this.usersList[i]['email'];
      var pwd = this.usersList[i]['password']['confirmPwd'];
                
      if( loginEmail == email && loginPwd == pwd)
      { 
        var username = this.usersList[i]['username'];
        localStorage.setItem('username',username);
        this.router.navigate(['/games']);                  
      }
      else
      {
        //error
      }
    }
  }

}
