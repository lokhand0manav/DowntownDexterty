import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const userData = [{username: 'lokhandmanav',
                  email   : 'nsankpal97@gmail.com',
                  phNo    : '7021626232'
                 },{
                  username: 'lokhand0manav',
                  email   : 'nsankpal1997@gmail.com',
                  phNo    : '7021626232'
                 }];
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated : boolean = false;
  constructor(private http: HttpClient) { 
  }
  isLoggedIn(){
    return this.isAuthenticated;
  }
  login(username: string, email: string, phNo: string){
    this.isAuthenticated = false;
    userData.forEach( e=>{
      if(e.username == username && e.email == email && e.phNo == phNo){
        this.isAuthenticated = true;
      } 
    });
    return this.isAuthenticated;;
  }
}
