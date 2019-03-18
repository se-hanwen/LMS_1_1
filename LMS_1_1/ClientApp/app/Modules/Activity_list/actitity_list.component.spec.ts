import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActitityListComponent } from './actitity_list.component';

describe('ActitityListComponent', () => {
  let component: ActitityListComponent;
  let fixture: ComponentFixture<ActitityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActitityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActitityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
