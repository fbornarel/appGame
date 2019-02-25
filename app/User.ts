export class User{
    username: string;
    avatar: string;
    email: string;
    password:{
        pwd: string;
        confirmPwd: string;
    };
}