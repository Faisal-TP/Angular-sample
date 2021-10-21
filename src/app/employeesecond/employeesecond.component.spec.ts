import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesecondComponent } from './employeesecond.component';

describe('EmployeesecondComponent', () => {
  let component: EmployeesecondComponent;
  let fixture: ComponentFixture<EmployeesecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
