import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private render: Renderer2, private router: Router) { }

  ngOnInit(): void {
  }

  addcl(e: any) {
    this.render.addClass(e?.target, "focus");
  }

  remcl(e: any) {
    this.render.removeClass(e?.target, "focus");
  }

  redirect() {
    this.router.navigate(["/register"]);
  }
}
