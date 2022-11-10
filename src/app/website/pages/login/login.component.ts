import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  token!: string;
  flag!: boolean;
  form!: FormGroup;

  constructor(
    private render: Renderer2,
    private router: Router,
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get emailField() {
    return this.form.get('email');
  }

  get passwordField() {
    return this.form.get('password');
  }

  login(){
    const data = this.form.value;
    console.log(data)
    this.usersService.login(data)
    .subscribe( rta => {
      this.token = rta.token;
      if (this.token != null){
        this.router.navigate(["/home"]);
      }
      else{
        this.flag = true
      }
    });
  }

  register() {
    this.router.navigate(["/register"]);
  }
}
