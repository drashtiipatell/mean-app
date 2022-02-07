import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { ServiceService } from '../shared/service.service';
import { Service } from '../shared/service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private serviceService:ServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  myservice(event:any){
    event.preventDefault()
    this.serviceService.setter(new Service());
    this.router.navigate(['form'])
  }
  login(event:any){
    event.preventDefault()
    this.router.navigate(['login'])
  }
  home(event:any){
    event.preventDefault()
    this.router.navigate(['listview'])
  }
}
