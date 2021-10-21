import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeefirstComponent } from './employeefirst.component';

describe('EmployeefirstComponent', () => {
  let component: EmployeefirstComponent;
  let fixture: ComponentFixture<EmployeefirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeefirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeefirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
