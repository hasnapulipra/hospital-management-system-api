import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-appoinments',
  templateUrl: './my-appoinments.component.html',
  styleUrls: ['./my-appoinments.component.css']
})
export class MyAppoinmentsComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {
    
  }
  dateSelected: any;
  showDate = false;
  showTable1 = false;
  showTable2 = false;
  showTable3 = false;
  
  fetchDateSelected(){
    
    if (this.dateSelected == "2023-02-14"){
      this.showDate = true;
      this.showTable2 = false;
      this.showTable3 = false;
      this.showTable1 = true;

    }
    if (this.dateSelected == "2023-02-15"){
      this.showDate = true;
      this.showTable1 = false;
      this.showTable3 = false;
      this.showTable2 = true;
    }
    if (this.dateSelected == "2023-02-16"){
      this.showDate = true;
      this.showTable1 = false;
      this.showTable2 = false;
      this.showTable3 = true;

    }
    
    console.log("date selected by user is " + this.dateSelected)
  }
  
}
