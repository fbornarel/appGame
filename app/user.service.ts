import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from './User';
import { USERSLIST } from './usersList';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})

export class UserService{

    public users = new BehaviorSubject(USERSLIST);
    public usersValue = this.users.getValue();
    
    constructor() { }

    public getUsers(){
        return this.usersValue; 
    }

    public add(user:User){
        this.usersValue.push(user);
    }
    
   
  

}