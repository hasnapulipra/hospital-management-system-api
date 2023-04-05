import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-request',
  templateUrl: './payment-request.component.html',
  styleUrls: ['./payment-request.component.css']
})
export class PaymentRequestComponent {
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
}
}
