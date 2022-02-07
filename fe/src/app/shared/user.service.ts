import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import {map, toPromise} from 'rxjs/operator';
import {User} from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user:User
  private baseUri:string = "http://localhost:3000/user"
  private header = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded,')

  constructor(private http:HttpClient) { }
  createUser(user:User){
    console.log(user,'jzdn', user.name)
    return this.http.post(this.baseUri ,{'name':user.name,'email':user.email,'passowrd':user.password},{headers:this.header})
  }
  getUser(){
    return this.http.get(this.baseUri,{headers:this.header})
  }
  setter(user:User){
    this.user = user
  }
  getter(){
    return this.user
  }
}
