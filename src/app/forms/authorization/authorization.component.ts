import { Component, OnInit,TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  userForm: FormGroup;
  valueEmail:string;
  valuePassword:string;
  message:boolean;
  localstorageEmail:string=this.itemEmail();
  localstoragePassword:string=this.itemPassword();
  constructor(private fb: FormBuilder,private router:Router) { }
  formErrors = {
      'email': '',
      'password': ''
  };


  validationMessages = {
      'email': {
          'required': 'Required field',
          'patern':'Wrong format email'
      },
      'password': {
          'required': 'Required field',
          'pattern': 'Wrong format password'
      }
  };
  ngOnInit() {
      this.buildForm();
  }

  buildForm() {
      this.userForm = this.fb.group({
          email: ['', [
              Validators.required,
              Validators.pattern('[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')
          ]],
          password: ['', [
              Validators.required,
              Validators.pattern('^(?=.*[a-z]{1})(?=.*[A-Z]).{8,16}$')
          ]]
      });

      this.userForm.valueChanges
          .subscribe(data => this.onValueChange(data));

      this.onValueChange();
  }
  itemEmail(): string {
     return localStorage.getItem('email');
  }
  itemPassword():string {
      return localStorage.getItem('password');
  }
  private getEmail(data) {
       this.valueEmail=data;
  }
  private getPassword(data) {
    this.valuePassword=data;
}
  compare() {
     if(this.valueEmail==this.localstorageEmail && this.valuePassword==this.localstoragePassword)
     {
     this.message=true;
     this.onClick();
     }
       else
       {
     this.message=false;
       }
  }
  onValueChange(data?: any) {
      if (!this.userForm) {
      return;
      }
      const form = this.userForm;

      for (const field in this.formErrors) {
          this.formErrors[field] = '';
          const control = form.get(field);

          if (control && control.dirty && !control.valid) {
              const message = this.validationMessages[field];
              for (const key in control.errors) {
                  this.formErrors[field] += message[key] + '  ';
              }
          }
      }
  }
  onClick() {
    this.router.navigate(['/app-testpage']);
  }
  onSubmit() {
      this.compare();
      console.log(this.userForm.value);
  }
}
