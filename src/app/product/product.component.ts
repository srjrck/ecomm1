import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;
  searchTerm: string ='';
  sortBy: string ='';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/products').subscribe(
      response => {
        this.products = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  search() {
    this.http.get(`http://localhost:3000/products?q=${this.searchTerm}`).subscribe(
      response => {
        this.products = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  sort() {
    this.http.get(`http://localhost:3000/products?sort=${this.sortBy}`).subscribe(
      response => {
        this.products = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}
