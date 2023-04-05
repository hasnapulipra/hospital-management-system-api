import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css']
})
export class LoginPatientComponent {
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
  //   this.router.navigateByUrl("/patient");
  // }
  
  dataReceived(formdata:any){
    console.log(formdata)
    this.router.navigateByUrl("patient");
   }
}
