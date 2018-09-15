import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserValidators } from './username.validators';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  
form=new FormGroup({
  account:new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)
      ,UserValidators.cannotContainSpace,UserValidators.shouldbeUnique
      ]),
      password:new FormControl()
  })
  
})
  constructor() { }

  ngOnInit() {
  }
  get username()
  {
    return this.form.get('username');
  }
  onSubmit()
  {
    console.log(this.form.value.username);
    console.log(this.form.value.password);
  }
}
