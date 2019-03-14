import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { of as observableOf } from 'rxjs';
import { Observable } from 'rxjs';

import { UserService } from '../user.service';
import { resolve } from 'q';
import { User } from '../User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usersList = this.userService.usersValue;
  public loginUserForm : FormGroup;
  public logUsername:void;
  private user :User[];

  constructor(
     private formBuilder: FormBuilder,
     private userService : UserService,
     private router :Router,
     ) { }

  ngOnInit() {
    this.loginUserForm = this.formBuilder.group({
      'emailPwd' : this.formBuilder.group({
      email: ['',[Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),this.emailExist.bind(this)]],
      password:['',[ Validators.minLength(10)]]//,this.matchPwEmail.bind(this)],    
    })});
  }

 /* public emailExist(AC:AbstractControl){
    for(var i=0;i<this.userService.usersValue.length;i++){
      var newUserEmail = AC.value;
      var email = this.userService.usersValue[i]['email'];
      if( newUserEmail !== email){
        return ({asyncInvalid:true});
      }
      else{
        return null;
      }
    }
  }*/

 /* public emailExist(AC:AbstractControl){
    var loginEmail = AC.value;
   this.userService.getUsers().forEach(element =>{   
    console.log(element.email);
      if(loginEmail == element.email){
        return null;
      }
      else{
        console.log('false');
        //error
      }      
   });
  }*/


  /*public loginUserFormSubmit(){ 
    var loginValue = this.loginUserForm.value;
    var loginEmail = loginValue.emailPwd.email;
    var loginPwd = loginValue.emailPwd.password;


    this.userService.getUsers().forEach(element => {
          
      if( loginEmail == element.email)
      { 
        console.log('yes');
        var username = this.usersList[i]['username'];
        localStorage.setItem('username',username);
        this.router.navigate(['/games']);                
      }
      else{
        return ({asyncInvalid:true});
      }
    })
  
  
      
    
    
  }*/

  

}


