import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm!: FormGroup;

  constructor(private fb:FormBuilder, private router:Router){
    this.loginForm = this.fb.group({
      email:[null],
      password:[null]
    })

  }
 
  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.router.navigate(['home']);
  }

  

  

}
