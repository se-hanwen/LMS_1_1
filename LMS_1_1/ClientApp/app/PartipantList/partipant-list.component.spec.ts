import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartipantListComponent } from './partipant-list.component';

describe('PartipantListComponent', () => {
  let component: PartipantListComponent;
  let fixture: ComponentFixture<PartipantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartipantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartipantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
