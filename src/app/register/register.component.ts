import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm: FormGroup;

constructor(private http: HttpClient) { 
  this.registerForm = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, Validators.required)
  });
}


ngOnInit() {
this.registerForm = new FormGroup({
'email': new FormControl(null, [Validators.required, Validators.email]),
'password': new FormControl(null, Validators.required),
'confirmPassword': new FormControl(null, Validators.required)
});
}

onSubmit() {
const email = this.registerForm.value.email;
const password = this.registerForm.value.password;
const confirmPassword = this.registerForm.value.confirmPassword;
if (password !== confirmPassword) {
  alert("Passwords do not match");
  return;
}

this.http.post('http://localhost:3000/users/register', {
  email: email,
  password: password
}).subscribe(response => {
  console.log(response);
});
}
}
