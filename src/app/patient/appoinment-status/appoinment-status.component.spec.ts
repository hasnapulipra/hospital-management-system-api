import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentStatusComponent } from './appoinment-status.component';

describe('AppoinmentStatusComponent', () => {
  let component: AppoinmentStatusComponent;
  let fixture: ComponentFixture<AppoinmentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoinmentStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppoinmentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
