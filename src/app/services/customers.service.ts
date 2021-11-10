import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  getAll(): Observable<Customer[]> {
    return of(CUSTOMER_MOCK);
  }

  getByFullName(fullName: string): Observable<Customer> {
    const firstName = fullName.split('-')[0];
    const lastName = fullName.split('-')[1];

    return of(
      CUSTOMER_MOCK.find(
        (c) =>
          c.firstName.toLocaleLowerCase() == firstName &&
          c.lastName.toLocaleLowerCase() == lastName
      ) as Customer
    );
  }
}

const CUSTOMER_MOCK: Customer[] = [
  {
    salutation: 'Mr.',
    firstName: 'Lucian',
    lastName: 'Shepard',
    addressLine1: '1222 56th St S',
    addressLine2: 'apt 23',
    city: 'Fargo',
    state: 'ND',
    zipCode: '58104',
    emailAddress: 'ash@sample.com',
    telePhoneNumber: '5551345699',
  },
  {
    salutation: 'Mr.',
    firstName: 'Isadora',
    lastName: 'Talley',
    addressLine1: '1222 56th St S',
    addressLine2: 'apt 23',
    city: 'Fargo',
    state: 'ND',
    zipCode: '58104',
    emailAddress: 'ash@sample.com',
    telePhoneNumber: '5551345699',
  },
  {
    salutation: 'Mr.',
    firstName: 'Om',
    lastName: 'Perry',
    addressLine1: '1222 56th St S',
    addressLine2: 'apt 23',
    city: 'Fargo',
    state: 'ND',
    zipCode: '58104',
    emailAddress: 'ash@sample.com',
    telePhoneNumber: '5551345699',
  },
  {
    salutation: 'Mr.',
    firstName: 'Katerina',
    lastName: 'Farley',
    addressLine1: '1222 56th St S',
    addressLine2: 'apt 23',
    city: 'Fargo',
    state: 'ND',
    zipCode: '58104',
    emailAddress: 'ash@sample.com',
    telePhoneNumber: '5551345699',
  },
];
