import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent {
  constructor(private router:Router){ }
  @Input() userType:string=""
  @Input() showSignup: boolean=true
  @Output() emitter = new EventEmitter()
  
submit(formdata:any){
  console.log(formdata)
  this.emitter.emit(formdata)
  console.log(formdata.userType)
}
}
