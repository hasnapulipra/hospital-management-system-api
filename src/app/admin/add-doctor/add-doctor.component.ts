import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  // myform = new FormGroup({
  //   name : new FormControl('',[Validators.required]),
  //   age : new FormControl('',[Validators.required]),
  //   special : new FormControl('',[Validators.required]),
  //   exp : new FormControl('',[Validators.required]),
  //   lan : new FormControl('',[Validators.required]),
  //   phone : new FormControl('',[Validators.required]),
  //   email : new FormControl('',[Validators.required]),
  //   sdl : new FormControl('',[Validators.required]),
  //   image : new FormControl('',[Validators.required]),
  // })
  // get name(){
  //   return this.myform.get('name');
  // }
  // get age(){
  //   return this.myform.get('age');
  // }
  // get special(){
  //   return this.myform.get('special');
  // }
  // get exp(){
  //   return this.myform.get('exp');
  // }
  // get lan(){
  //   return this.myform.get('lan');
  // }
  // get phone(){
  //   return this.myform.get('phone');
  // }
  
  // get email(){
  //   return this.myform.get('email');
  // }
  // get sdl(){
  //   return this.myform.get('sdl');
  // }
  // get image(){
  //   return this.myform.get('image');
  // }
  
  constructor(private api : ApiService) {}
  submit(formdata:any){
    console.log(formdata);
    this.api.addDoctor(formdata).subscribe(res=>{
      console.log(res)
    })
  }
}
