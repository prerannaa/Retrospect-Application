import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthClientService } from '../auth-client.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reg: AuthClientService,
    private router: Router,
    private toastr: ToastrService,
  ) { 
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.email], 
      // email: new FormControl('',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSignup(){
    if(this.signupForm.valid){
      // console.log(this.signupForm.value)
      this.reg.signup(this.signupForm.value).subscribe({
        next:(res) =>{
          // alert(res.message);
          this.toastr.success(res.message);
          this.signupForm.reset();
          this.router.navigate(['/'])
        },
        error: (err) =>{
          this.toastr.error(err?.error.message);
        }
      })
    }
    else{
      this.validateAllFormFields(this.signupForm);
      this.toastr.error("Invalid Form");  
    }
  }
  
  private validateAllFormFields(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach( field =>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }
      else if(control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
      
    }) 
  }

}

