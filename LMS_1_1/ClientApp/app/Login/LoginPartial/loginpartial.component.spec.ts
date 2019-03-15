import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpartialComponent } from './loginpartial.component';

describe('LoginpartialComponent', () => {
  let component: LoginpartialComponent;
  let fixture: ComponentFixture<LoginpartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginpartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
