import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RetrospectentryComponent } from './retrospectentry/retrospectentry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RetrospectentryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
    ButtonModule,
    CKEditorModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    }), 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
