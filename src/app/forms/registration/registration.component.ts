import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {User} from '../../user';

import {validMatch} from '../../custom-validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  userForm: FormGroup;
  user: User = new User();
  storageEmail:string;
  storagePassword:string;
  storageName:string;
  storageSurname:string;

  // Объект с ошибками, которые будут выведены в пользовательском интерфейсе
  formErrors = {
    'name': '',
    'surname': '',
    'email': '',
    'password': '',
    'confirmpassword': ''
  };

  // Объект с сообщениями ошибок
  validationMessages = {
      'name': {
          'required': 'Required field.',
          'pattern': 'Only English letter not numbers and any symbols'
      },
      'surname': {
          'required': 'Required field.',
          'pattern': 'Only English letter not numbers and any symbols'
      },
      'email': {
          'required': 'Required field.',
          'pattern':'Wrong format email'
      },
      'password': {
          'required': 'Required field.',
          'minlength':'min 8 symbols',
          'maxlength':'max 16 symbols',
          'pattern': 'one letter in upper register',
      },
      'confirmpassword': {
        'required': 'Required field.',
        'validator': 'Password do not match'
    }
  };

  constructor(private fb: FormBuilder) {  }

  ngOnInit() {
      this.buildForm();
  }

  buildForm():void {
      this.userForm = this.fb.group({
          name: ['', [
              Validators.required,
              Validators.pattern('^[a-zA-Z\s]+$')
          ]],
          surname: ['', [
              Validators.required,
              Validators.pattern('^[a-zA-Z\s]+$')
          ]],
        email: ['', [
              Validators.required,
              Validators.pattern('[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')
          ]],
          password: ['', [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(16),
              Validators.pattern('^(?=.*[a-z]{1,})(?=.*[A-Z]).{8,16}$')// 8 букв латиницей одна в верхнем регистре
          ]],
          confirmpassword: ['',
            Validators.required,
        ]
      }, {validator:validMatch}
    );

      this.userForm.valueChanges
          .subscribe(data => this.onValueChange(data));

      this.onValueChange();
  }
  onKeyname(data) {
      this.storageName=data;
  }
  onKeysurname(data) {
      this.storageSurname=data;
  }
  onKeymail(data) {
    this.storageEmail=data;
  }
  onKeypassword(data) {
    this.storagePassword = data;
  }
  onKeyPress($event: KeyboardEvent) {
    if(($event.ctrlKey || $event.metaKey) && $event.keyCode == 67)
    {
        console.log('CTRL + C');
    }
    if(($event.ctrlKey || $event.metaKey) && $event.keyCode == 86)
    {
        console.log('CTRL +  V');
    }
}
onCtrlV() {
    alert(' Dont allow to use ctrl+V')
  }

  onCtrlC() {
    alert('Dont allow to use ctrl+C')
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
                  this.formErrors[field] += message[key] + ' ';
              }
          }
      }
  }

  onSubmit() {
      console.log('submitted');
      console.log(this.userForm.value);
      localStorage.setItem('email',this.storageEmail);
      localStorage.setItem('password',this.storagePassword);
      localStorage.setItem('name', this.storageName);
      localStorage.setItem('surname',this.storageSurname);
  }

}
