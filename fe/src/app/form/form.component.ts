import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../shared/service.service';
import { Service } from '../shared/service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  service:Service

  constructor(private router:Router,private serviceService:ServiceService) { }

  ngOnInit(): void {
    this.service=this.serviceService.getter()
  }
  onSubmit(form:NgForm){
    console.log(this.service,'this', form.value)
    this.serviceService.createService(this.service).subscribe(
      data=>{
        console.log('done')
        this.router.navigate(['listview'])
      },
      error=>{console.log(error)}
    )
  }

}
