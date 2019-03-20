import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivitiesWithModulIdComponent } from './add-activities-with-modul-id.component';

describe('AddActivitiesWithModulIdComponent', () => {
  let component: AddActivitiesWithModulIdComponent;
  let fixture: ComponentFixture<AddActivitiesWithModulIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivitiesWithModulIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivitiesWithModulIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
