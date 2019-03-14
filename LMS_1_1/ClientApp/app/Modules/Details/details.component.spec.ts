import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulDetailsComponent } from './details.component';

describe('ModulDetailsComponent', () => {
  let component: ModulDetailsComponent;
  let fixture: ComponentFixture<ModulDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
