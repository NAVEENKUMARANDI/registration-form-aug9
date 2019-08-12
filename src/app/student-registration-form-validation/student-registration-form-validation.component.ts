import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-student-registration-form-validation',
  templateUrl: './student-registration-form-validation.component.html',
  styleUrls: ['./student-registration-form-validation.component.css']
})
export class StudentRegistrationFormValidationComponent implements OnInit {

  States : any = ['TamilNadu', 'Karnataka', 'Kerala', 'Andhra Pradesh']
  Country : any = ['India', 'UnitedState', "London"]

  qualificationArrayItems: {
    qualificationNumber: number,
    exam: string,
    board: string,
    percentage: number,
    yearOfPassing: number
  }[];

  studentProfile = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    lastName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.maxLength(30)]],
    mobileNumber: ['', [Validators.required, Validators.maxLength(10)]],
    gender: ['', [Validators.required]],
    address: ['', [Validators.required]],
    city: ['', [Validators.required]],
    pinCode: ['', [Validators.required, Validators.minLength(6)]],
    state: ['', [Validators.required]],
    country: ['', [Validators.required]],
    drawing: ['', [Validators.required]],
    singing: ['', [Validators.required]],
    dancing: ['', [Validators.required]],
    others: ['', [Validators.required]],
    Other_Hobby: ['',[Validators.required, Validators.maxLength(15)]],
    course: ['',[Validators.required]],
    
    qualificationArray: this.fb.array([])
  });

  qualificationFormGroup():FormGroup {
    return this.fb.group({

    qualificationNumber: ['',Validators.required],
    exam:  ['',[Validators.required]],
    board: ['',[Validators.required, Validators.maxLength(15)]],
    percentage: ['',[Validators.required]],
    yearOfPassing: ['',[Validators.required]]
    });
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.qualificationArrayItems = [];
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

  get address() {
    return this.studentProfile.get('address');
  }
  get city() {
    return this.studentProfile.get('city');
  }
  get pinCode() {
    return this.studentProfile.get('pinCode');
  }
  get state() {
    return this.studentProfile.get('state');
  }
  get country() {
    return this.studentProfile.get('country');
  }

  get drawing() {
    return this.studentProfile.get('drawing');
  }
  get singing() {
    return this.studentProfile.get('singing');
  }
  get dancing() {
    return this.studentProfile.get('dancing');
  }
  get others() {
    return this.studentProfile.get('others');
  }
  get Other_Hobby() {
    return this.studentProfile.get('Other_Hobby');
  }

  get qualificationArray() {
    return this.studentProfile.get('qualificationArray') as FormArray;
  }
  get percentage() {
    return this.studentProfile.get('percentage');
  }
  get board() {
    return this.studentProfile.get('board');
  }
  get course() {
    return this.studentProfile.get('course');
  }
  addQualification() {
    this.qualificationArray.push(
      this.qualificationFormGroup()
    );
  }
  onSubmit() {
    console.warn(this.studentProfile.value);
  }
}
