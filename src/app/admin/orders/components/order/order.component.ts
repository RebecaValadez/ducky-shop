import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../../services/users.service';
import { User } from 'src/app/models/user.model';
import { OrdersService } from '../../../../services/orders.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  form!: FormGroup;
  form2!: FormGroup;
  user!: User;
  user_id!: number;
  order_id!: number;
  product_id!: number;
  product_name!: string

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private ordersService: OrdersService,
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.buildForm();
    this.buildForm2();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.order_id = params['id'];
      if (this.order_id) {
        this.getOrder();
      }
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id:[''],
      order_number: [''],
      product_id: [''],
      user_id: [''],
      quantity: [''],
      total_price: [''],
      status: [''],
      created_at:[''],
      updated_at:['']
    });
  }

  private buildForm2() {
    this.form2 = this.formBuilder.group({
      id:[''],
      username: [''],
      email: [''],
      full_name: [''],
      is_superuser: [''],
      phone: [''],
      address_country: [''],
      address_state: [''],
      address_city: [''],
      address_cp: [''],
      address_line_1: [''],
      address_line_2: [''],
      created_at:[''],
      updated_at:['']
    });
  }

  get productField() {
    return this.form.get('product_id');
  }

  save() {
    if (this.form.valid) {
      if (this.order_id) {
        this.updateOrder();
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  private updateOrder() {
    const data = this.form.value;
    this.ordersService.updateOrder(this.order_id, data)
    .subscribe(rta => {
      this.router.navigate(['/admin/orders']);
    });
  }

  getOrder() {
    this.ordersService.getOrder(this.order_id)
    .subscribe(data => {
      this.user_id = data.data.user_id
      this.product_id = data.data.product_id
      this.getUser();
      // this.getProduct();
      this.form.patchValue(data.data);
    });
  }

  private getUser() {
    this.usersService.getUser(this.user_id)
    .subscribe(data => {
      this.form2.patchValue(data);
    });
  }

  private getProduct() {
    this.productsService.getProduct(this.product_id)
      .subscribe(data => {
        this.product_name = data.data.name
      });
  }

}
