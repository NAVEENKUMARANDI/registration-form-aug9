import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-registration-form-validation',
  templateUrl: './student-registration-form-validation.component.html',
  styleUrls: ['./student-registration-form-validation.component.css']
})
export class StudentRegistrationFormValidationComponent implements OnInit {

  studentProfile = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    lastName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get firstName() {
    return this.studentProfile.get('firstName');
  }

  get lastName() {
    return this.studentProfile.get('lastName');
  }

}
