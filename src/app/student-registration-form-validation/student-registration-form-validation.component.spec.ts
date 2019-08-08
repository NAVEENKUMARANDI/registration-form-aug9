import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegistrationFormValidationComponent } from './student-registration-form-validation.component';

describe('StudentRegistrationFormValidationComponent', () => {
  let component: StudentRegistrationFormValidationComponent;
  let fixture: ComponentFixture<StudentRegistrationFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRegistrationFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegistrationFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
