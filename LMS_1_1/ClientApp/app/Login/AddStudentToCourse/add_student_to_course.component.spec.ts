import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentToCourseComponent } from './add_student_to_course.component';

describe('AddStudentToCourseComponent', () => {
  let component: AddStudentToCourseComponent;
  let fixture: ComponentFixture<AddStudentToCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentToCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentToCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
