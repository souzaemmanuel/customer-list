import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'salutation'];
  dataSource: Customer[] = [];
  constructor(private service: CustomersService, private router: Router) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((customers) => {
      this.dataSource = customers;
    });
  }

  redirectTo(fullName: string) {
    this.router.navigate(['detail/' + fullName.toLocaleLowerCase()]);
  }
}
