import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from './../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public newUserForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router :Router,
    private userService : UserService
  ) { }

  ngOnInit() {
    this.newUserForm = this.formBuilder.group({
      'username': ['', Validators],
      'avatar' : [''],
      'email': ['', Validators.compose([Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
      'password': this.formBuilder.group({
        pwd: ['',[ Validators.minLength(10)]],
        confirmPwd: ['',[ Validators.minLength(10)]]
      },{validator:this.MatchPassword})    
    });
  }

  public addNewUser(){
    this.userService.add(this.newUserForm.value);
  }

  public MatchPassword(AC: AbstractControl) {
    let password = AC.get('pwd').value; 
    let confirmPassword = AC.get('confirmPwd').value; 
     if(password != confirmPassword) {
         AC.get('confirmPwd').setErrors( {MatchPassword: true} )
     } else {
         return null
     }
  }

  public newUserFormSubmit(){   
    if(this.newUserForm.valid){
      this.userService.usersValue = this.newUserForm.value;
      this.addNewUser();
      this.router.navigate(['/login']);
    }         
  }

}
