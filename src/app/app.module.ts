import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';


@NgModule({
declarations: [
AppComponent,
LoginComponent,
RegisterComponent
],
imports: [
BrowserModule,
AppRoutingModule,
FormsModule,
HttpClientModule,
ReactiveFormsModule
],
providers: [AuthService],
bootstrap: [AppComponent]
})
export class AppModule { }

