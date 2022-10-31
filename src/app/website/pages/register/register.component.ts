import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
  }

  addcl(e: any) {
    this.render.addClass(e?.target, "focus");
  }

  remcl(e: any) {
    this.render.removeClass(e?.target, "focus");
  }
}
