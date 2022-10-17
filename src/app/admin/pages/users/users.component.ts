import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createUser() {
    this.router.navigate(['/admin/create-user']);
  }

  editUser() {
    this.router.navigate(['/admin/edit-user']);
  }
}
