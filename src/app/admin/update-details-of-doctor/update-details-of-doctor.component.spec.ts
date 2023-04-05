import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDetailsOfDoctorComponent } from './update-details-of-doctor.component';

describe('UpdateDetailsOfDoctorComponent', () => {
  let component: UpdateDetailsOfDoctorComponent;
  let fixture: ComponentFixture<UpdateDetailsOfDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDetailsOfDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDetailsOfDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
