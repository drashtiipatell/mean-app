import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user:User
  constructor(private router:Router,private userService:UserService,private route: ActivatedRoute ,) { }

  ngOnInit(): void {
    this.user=this.userService.getter()
  }
  login(event:any){
    event.preventDefault()
    this.router.navigate(['login'])
  }
  onSubmit(form:NgForm){
    console.log(this.user,'this', form.value,'jkasfnlj')
    this.userService.createUser(this.user).subscribe(
      data=>{
        console.log('done')
        console.log(data)
        this.router.navigate(['listview'])
      },
      error=>{console.log(error)}
    )
  }




}
