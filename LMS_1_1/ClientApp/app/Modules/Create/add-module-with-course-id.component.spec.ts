import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModuleWithCourseIdComponent } from './add-module-with-course-id.component';

describe('AddModuleWithCourseIdComponent', () => {
  let component: AddModuleWithCourseIdComponent;
  let fixture: ComponentFixture<AddModuleWithCourseIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddModuleWithCourseIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModuleWithCourseIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
