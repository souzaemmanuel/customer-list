import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/customers.service';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  customer?: Customer;
  form?: FormGroup;
  private onDestroy$ = new Subject<boolean>();
  constructor(
    private service: CustomersService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const fullName = this.route.snapshot.paramMap.get('fullName') as string;
    this.service
      .getByFullName(fullName)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((customer) => {
        this.customer = customer;

        this.buildForm(customer);
      });
  }

  buildForm(customer: Customer) {
    this.form = this.formBuilder.group({
      firstName: [
        customer.firstName ? customer.firstName : '',
        Validators.required,
      ],
      lastName: [
        customer.lastName ? customer.lastName : '',
        Validators.required,
      ],
      salutation: [
        customer.salutation ? customer.salutation : '',
        Validators.required,
      ],
      addressLine1: [
        customer.addressLine1 ? customer.addressLine1 : '',
        Validators.required,
      ],
      addressLine2: [
        customer.addressLine2 ? customer.addressLine2 : '',
        Validators.required,
      ],
      city: [customer.city ? customer.city : '', Validators.required],
      state: [customer.state ? customer.state : '', Validators.required],
      zipCode: [customer.zipCode ? customer.zipCode : '', Validators.required],
      emailAddress: [
        customer.emailAddress ? customer.emailAddress : '',
        Validators.required,
      ],
      telePhoneNumber: [
        customer.telePhoneNumber ? customer.telePhoneNumber : '',
        Validators.required,
      ],
    });
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
