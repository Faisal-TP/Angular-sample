import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfAssignmentComponent } from './if-assignment.component';

describe('IfAssignmentComponent', () => {
  let component: IfAssignmentComponent;
  let fixture: ComponentFixture<IfAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
