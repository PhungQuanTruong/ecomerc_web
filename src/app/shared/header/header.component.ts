import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount$: Observable<number>;
  searchQuery: string = '';
  isCartOpen: boolean = false;

  constructor(
    private router: Router,
    public cartService: CartService
  ) {
    this.cartCount$ = this.cartService.cartItems$.pipe(
      map(() => this.cartService.getCartCount())
    );
  }

  ngOnInit(): void {
  }

  onSearch() {
    // Implement search functionality
    console.log('Search:', this.searchQuery);
  }

  openCart() {
    this.isCartOpen = true;
    this.cartService.isCartOpen = true;
  }
}

