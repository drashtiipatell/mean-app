import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {ServiceService } from '../shared/service.service';
import { Service } from '../shared/service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[ServiceService]
})
export class ListComponent implements OnInit {
  services: Service[]

  constructor(private serviceService: ServiceService) { }

  
  ngOnInit() {
    this.readServices();  
  }
  readServices(){
    this.serviceService.getService().subscribe((data:any)=>{
      console.log(data,'data');
      this.services  = data['msg']
      console.log(this.services,'jkasnkl')
    },
    error =>{
      console.log(error)
    }
    )
  }
  // this.http.get('/service').subscribe(data => {
  //   this.services = data;
  //   console.log(this.services)
  //   console.log('get')
  // });




}
