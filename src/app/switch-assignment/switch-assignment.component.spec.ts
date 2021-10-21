import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchAssignmentComponent } from './switch-assignment.component';

describe('SwitchAssignmentComponent', () => {
  let component: SwitchAssignmentComponent;
  let fixture: ComponentFixture<SwitchAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
