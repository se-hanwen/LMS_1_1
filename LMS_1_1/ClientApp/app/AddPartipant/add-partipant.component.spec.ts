import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartipantComponent } from './add-partipant.component';

describe('AddPartipantComponent', () => {
  let component: AddPartipantComponent;
  let fixture: ComponentFixture<AddPartipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPartipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPartipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
