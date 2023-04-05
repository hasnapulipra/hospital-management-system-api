import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppoinmentsComponent } from './my-appoinments.component';

describe('MyAppoinmentsComponent', () => {
  let component: MyAppoinmentsComponent;
  let fixture: ComponentFixture<MyAppoinmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAppoinmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAppoinmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
