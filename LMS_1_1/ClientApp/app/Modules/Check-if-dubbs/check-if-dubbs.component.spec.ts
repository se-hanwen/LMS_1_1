import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckIfDubbsComponent } from './check-if-dubbs.component';

describe('CheckIfDubbsComponent', () => {
  let component: CheckIfDubbsComponent;
  let fixture: ComponentFixture<CheckIfDubbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckIfDubbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckIfDubbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
