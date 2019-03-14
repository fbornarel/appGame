import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, ValidatorFn, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Router} from '@angular/router';
import { of as observableOf } from 'rxjs';

import { UserService } from './../user.service';
import { Observable } from 'rxjs';
//import { promise } from 'protractor';

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
      'username': ['',[Validators.required,this.usernameExist.bind(this)]],
      'avatar' : ['',Validators.required],
      'email': ['',[Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),this.emailExist.bind(this)]],                                                          
      'password': this.formBuilder.group({
        pwd: ['',[ Validators.minLength(10)]],
        confirmPwd: ['',[ Validators.minLength(10)]]
      },{validator:this.MatchPassword})  
    }); 
  
  }
     
  public MatchPassword(AC: AbstractControl):Observable<any>{
    let password = AC.get('pwd').value; 
    let confirmPassword = AC.get('confirmPwd').value; 
    if(password != confirmPassword){
      AC.get('confirmPwd').setErrors( {MatchPassword: true} )
    }
    else{
      return null;
    }
  }

/*public usernameExist(AC:AbstractControl){
  let newUserUsername = AC.value;    
    return  new Promise((resolve =>{          
      for(let i=0;i<this.userService.usersValue.length;i++){ 
          let username = this.userService.usersValue[i]['username'];        
          console.log(username);                      
          if(newUserUsername !== username ){            
             resolve();                    
          }
          else{
            AC.setErrors({asyncInvalid:true});
            return;
          } 
      }                   
    }))
}*/

  public usernameExist(AC:AbstractControl){
    for(var i=0;i<this.userService.usersValue.length;i++){
      var newUserUsername = AC.value;
      var username = this.userService.usersValue[i]['username'];
      if(newUserUsername == username){
        return observableOf({asyncInvalid:true});
      }
    }
  }

  public emailExist(AC:AbstractControl){
    for(var i=0;i<this.userService.usersValue.length;i++){
      var newUserEmail = AC.value;
      var email = this.userService.usersValue[i]['email'];
      if(newUserEmail == email){
        return observableOf({asyncInvalid:true});
      }
    }
  }

  public addNewUser(){
    this.userService.add(this.newUserForm.value);
  }
 
  public newUserFormSubmit(){
    if(this.newUserForm.valid){     
      this.addNewUser();
      this.router.navigate(['/login']);
    }      
  }

}
        

