import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../../services/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  form!: FormGroup;
  user_id!: number;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.user_id = params['id'];
      if (this.user_id) {
        this.getUser();
      }
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required]
    });
  }

  save() {
    if (this.form.valid) {
      if (this.user_id) {
        this.updateUser();
      } else {
        this.createUser();
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  private createUser() {
    const data = this.form.value;
    this.usersService.createUser(data)
    .subscribe(() => {
      this.router.navigate(['/admin/users']);
    });
  }

  private updateUser() {
    const data = this.form.value;
    this.usersService.updateUser(this.user_id, data)
    .subscribe(() => {
      this.router.navigate(['/admin/users']);
    });
  }

  private getUser() {
    this.usersService.getUser(this.user_id)
    .subscribe(data => {
      console.log(data)
      this.form.patchValue(data.data);
    });
  }

}
