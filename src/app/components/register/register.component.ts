import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm= this.formbuilder.group({
    fullName: ['', [Validators.required, Validators.minLength(8)]],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      confirmPassword:['',Validators.required]
    }, {
      validators: this.passwordMatchValidator.bind(this) // Bind the method correctly (without bind it used before declaration solve this problem)
    });
  constructor(private formbuilder:FormBuilder, private authService:AuthService, private messageService:MessageService, private router:Router){}

  get fullName(){
    return this.registerForm.controls['fullName']
  }
  get email(){
    return this.registerForm.controls['email']
  }
  get password(){
    return this.registerForm.controls['password']
  }
  get confirmPassword(){
    return this.registerForm.controls['confirmPassword']
  }
   // Custom Validator Method
   passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (!password || !confirmPassword) {
      return null;
    }
    return password.value === confirmPassword.value ? null : { passwordMismatch: true };
  }
  submitDetails(){
    console.log(this.registerForm.value)
    const postData={...this.registerForm.value} //takes all data from register form except the confirm password
    delete postData.confirmPassword
    this.authService.registerUser(postData as User).subscribe({
      next:(response)=> {
        console.log(response)
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User Registered Successfully' });
        this.router.navigate(['login'])
    },
    error:(err)=> {
    console.log(err)
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'User Registered failed' });

    }
  }
    
    )
  }

}