import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.css']
})
export class LoginDoctorComponent {
  constructor(private router:Router){ }
  // myform = new FormGroup({
  //   username : new FormControl('',[Validators.required]),
  //   password : new FormControl('',[Validators.required]),
  // })
    
  // get username(){
  //   return this.myform.get('username');
  // }
  // get password(){
  //   return this.myform.get('password');
  // }
  // submit(){
  //   console.log(this.myform.value)
  //   this.router.navigateByUrl("/doctors");
  // }
  dataReceived(formdata:any){
    console.log(formdata)
    this.router.navigateByUrl("doctors");
  }
}
