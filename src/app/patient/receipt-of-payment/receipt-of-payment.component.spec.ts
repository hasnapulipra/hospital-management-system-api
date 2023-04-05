import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptOfPaymentComponent } from './receipt-of-payment.component';

describe('ReceiptOfPaymentComponent', () => {
  let component: ReceiptOfPaymentComponent;
  let fixture: ComponentFixture<ReceiptOfPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptOfPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptOfPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
