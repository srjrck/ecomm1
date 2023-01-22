import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/cart').subscribe(
      response => {
        this.cart = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  addToCart(productId: number) {
    this.http.post('http://localhost:3000/cart', {
      productId: productId
    }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
  
  updateQuantity(productId: number, quantity: number) {
    this.http.put(`http://localhost:3000/cart/${productId}`, {
      quantity: quantity
    }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
  
  removeFromCart(productId: number) {
    this.http.delete(`http://localhost:3000/cart/${productId}`).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
