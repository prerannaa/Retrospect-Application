import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthClientService } from '../auth-client.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa fa-eye-slash";
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthClientService,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.loginForm = this.fb.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = "fa-eye") : (this.eyeIcon = "fa-eye-slash");
    this.isText ? (this.type = "text") : (this.type = "password");
  }

  onLogin() {
    if (this.loginForm.invalid) 
    {
      this.validateAllFormFields(this.loginForm);
      this.toastr.error("Invalid Form"); 
    }
    
      this.auth.login(this.loginForm.value).subscribe({
        next: (res) => {
          // alert(res.message);
          this.toastr.success(res.message);
          this.router.navigate(['dashboard']);
        },
        error: (err) => {
          this.toastr.error(err?.error.message);
        }
      });
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control) {
        control.markAsDirty({ onlySelf: true });
      }
    });
  }
}
