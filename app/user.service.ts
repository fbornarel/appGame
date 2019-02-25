import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './User';
import { USERSLIST } from './usersList';

@Injectable({
    providedIn: 'root'
})

export class UserService{

    public users = USERSLIST;

    constructor() { }

    public getUsers(): Observable<User[]>{
        return of(USERSLIST); 
    }

    public add(user:User){
        this.users.push(user);
    }

    

    

}