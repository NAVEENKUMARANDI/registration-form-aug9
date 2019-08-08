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
    email: ['', [Validators.required, Validators.maxLength(30)]],
    mobileNumber: ['', [Validators.required, Validators.maxLength(10)]],
    gender: ['',[Validators.required]],
    address: ['', [Validators.required]]
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

  get email() {
    return this.studentProfile.get('email');
  }

  get mobileNumber() {
    return this.studentProfile.get('mobileNumber');
  }
  
  get gender() {
    return this.studentProfile.get('gender');
  }

  get password() {
    return this.studentProfile.get('address');
  }
}
