import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import {map, toPromise} from 'rxjs/operator';
import {Service} from './service';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private service:Service
  private baseUri:string = "http://localhost:3000/service"
  private header = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded,')

  constructor(private http:HttpClient) { }
  createService(service:Service){
    console.log(service,'jzdn', service.name)
    return this.http.post(this.baseUri ,{'name':service.name,'email':service.email,'contact': service.contact, 'location':service.location,'time':service.time,'service':service.service})
  }
  getService(){
    return this.http.get(this.baseUri,{headers:this.header})
  }
  setter(service:Service){
    this.service = service
  }
  getter(){
    return this.service
  }
}
