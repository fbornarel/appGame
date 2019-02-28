import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { User } from './User';
import { USERSLIST } from './usersList';

@Injectable({
    providedIn: 'root'
})

export class UserService{

    public users = new BehaviorSubject(USERSLIST);
    public usersValue = this.users.getValue();
    
    constructor(private router: Router) { }

    public getUsers(){
        return this.usersValue; 
    }

    public add(user:User){
        this.users.getValue().push(user);
    }
    

}