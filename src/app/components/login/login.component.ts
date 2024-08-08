import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })

  constructor(private formBuilder:FormBuilder) { }

get email(){
  return this.loginForm.controls['email']
}
get password(){
  return this.loginForm.controls['password']
}
}
