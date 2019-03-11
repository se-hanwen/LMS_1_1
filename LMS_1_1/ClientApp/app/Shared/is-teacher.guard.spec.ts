import { TestBed, async, inject } from '@angular/core/testing';

import { IsTeacherGuard } from './is-teacher.guard';

describe('IsTeacherGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsTeacherGuard]
    });
  });

  it('should ...', inject([IsTeacherGuard], (guard: IsTeacherGuard) => {
    expect(guard).toBeTruthy();
  }));
});
