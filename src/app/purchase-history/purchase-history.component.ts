import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-purchase-history',
templateUrl: './purchase-history.component.html',
styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
purchases: any;

constructor(private http: HttpClient) { }

ngOnInit() {
this.http.get('http://localhost:3000/purchase-history').subscribe(response => {
this.purchases = response;
});
}
}