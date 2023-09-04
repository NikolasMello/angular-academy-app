import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export default class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ){

  }

  ngOnInit(): void {
      this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      email:'',
      password:''
    })
  }

}
