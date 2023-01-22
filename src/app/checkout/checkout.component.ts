import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-checkout',
templateUrl: './checkout.component.html',
styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
cart: any;
total!: number;
paymentMethod: string;


constructor(private http: HttpClient) { this.paymentMethod = '';}

ngOnInit() {
this.http.get('http://localhost:3000/cart').subscribe(response => {
this.cart = response;
this.calculateTotal();
});
}

calculateTotal() {
this.total = 0;
for (let i = 0; i < this.cart.length; i++) {
this.total += this.cart[i].price * this.cart[i].quantity;
}
}

checkout() {
this.http.post('http://localhost:3000/checkout', {
paymentMethod: this.paymentMethod
}).subscribe(response => {
console.log(response);
});
}
}
