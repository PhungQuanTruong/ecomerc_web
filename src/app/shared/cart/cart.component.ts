import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;
  total$: Observable<number>;
  isCartOpen$: Observable<boolean>;

  constructor(
    public cartService: CartService,
    private router: Router
  ) {
    this.cartItems$ = this.cartService.cartItems$;
    this.total$ = this.cartService.cartItems$.pipe(
      map(() => this.cartService.getTotal())
    );
    this.isCartOpen$ = this.cartService.isCartOpen$;
  }

  ngOnInit(): void {
  }

  closeCart() {
    this.cartService.isCartOpen = false;
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }

  updateQuantity(id: number, quantity: number) {
    this.cartService.updateQuantity(id, quantity);
  }

  payNow() {
    if (this.cartService.getCartCount() > 0) {
      this.router.navigate(['/success']);
      this.cartService.clearCart();
      this.closeCart();
    }
  }
}

