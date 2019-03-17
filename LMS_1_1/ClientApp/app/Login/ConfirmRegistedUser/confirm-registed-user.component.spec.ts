import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRegistedUserComponent } from './confirm-registed-user.component';

describe('ConfirmRegistedUserComponent', () => {
  let component: ConfirmRegistedUserComponent;
  let fixture: ComponentFixture<ConfirmRegistedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmRegistedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmRegistedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
