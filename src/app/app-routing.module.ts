import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShoppingbagComponent} from './shoppingbag/shoppingbag.component';
import {ProductsComponent} from './products/products.component';

const routes: Routes = [
  {path: 'shoppingbag', component: ShoppingbagComponent },
  {path: 'products', component: ProductsComponent},
  {path: '', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
