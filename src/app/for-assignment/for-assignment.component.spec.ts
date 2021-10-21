import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForAssignmentComponent } from './for-assignment.component';

describe('ForAssignmentComponent', () => {
  let component: ForAssignmentComponent;
  let fixture: ComponentFixture<ForAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
