import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { cartRoutes } from './lib.routes';
import { CartComponent } from './cart/cart.component';
import { BookComponent } from '@office/books';


@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(cartRoutes),
    BookComponent
  ],
  declarations: [CartComponent],
})
export class CartModule {}
