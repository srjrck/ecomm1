import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'products', component: ProductComponent, canActivate: [AuthGuard] },
{ path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
{ path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
{ path: 'purchase-history', component: PurchaseHistoryComponent, canActivate: [AuthGuard] }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }