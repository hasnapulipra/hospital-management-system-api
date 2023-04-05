import { Component } from '@angular/core';

@Component({
  selector: 'app-book-appoinment',
  templateUrl: './book-appoinment.component.html',
  styleUrls: ['./book-appoinment.component.css']
})
export class BookAppoinmentComponent {
showFee = false;
showavalDate = false;
showavalSlots = false;
showSlots1 = false;
showSlots2 = false;
dateSelected: any;
bookbutton = false;
displayFee(){
  
  this.showFee=true;
}

displayAvalDate(){
  if(this.dateSelected == "2023-02-14" || this.dateSelected == "2023-02-15"){
    this.showavalDate = true;
  }
  else{
    this.showavalDate = false;
    this.showavalSlots = true;
    this.showSlots1 = true;
    this.showSlots2 = true;
  }
  
}
book(){
  this.bookbutton = true;
}
}
