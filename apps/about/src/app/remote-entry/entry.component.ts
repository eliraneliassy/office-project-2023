import { Component, inject } from '@angular/core';
import { CartService } from '@office/cart-state';

@Component({
  selector: 'officeproject-about-entry',
  template: `<officeproject-nx-welcome></officeproject-nx-welcome>`,
})
export class RemoteEntryComponent {
  cartService: CartService = inject(CartService);
}
