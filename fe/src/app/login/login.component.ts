import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { ServiceService } from '../shared/service.service';
import { Service } from '../shared/service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private serviceService:ServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  sigin(event:any){
    
    event.preventDefault()
    this.router.navigate(['sigin'])
  }

}
