import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentSlide: number = 0;
  slides = [
    { image: '/assets/img/banner1.webp', title: 'Welcome to JD Sport', description: 'Discover the latest sports fashion and trends' },
    { image: '/assets/img/banner2.webp', title: 'Welcome to JD Sport', description: 'Discover the latest sports fashion and trends' },
    { image: '/assets/img/banner3.webp', title: 'Welcome to JD Sport', description: 'Discover the latest sports fashion and trends' }
  ];

  products: Product[] = [
    { id: 1, name: 'ADICOLOR SEASONAL', price: 50, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbAJHJNkZwHWgzOUrh5Khc_bHaD9_8D0hlh7o8-GgXpIMCLjJZfpW20zG0z4GWsw4_3x-5LLZ4x_r2Zi9ue3VSt3jI89QDQB8Qc2bRH8VGytQLnWbkBGu9oMI3IUcdPpo7Lbf45p1ZcmBSfbm_APKeYbL_BP9eoPV_pLMd28sfJzh8-ZIF6ESWkUCLuGs/s840/product1.jpeg' },
    { id: 2, name: 'ADICOLOR SEASONAL', price: 50, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXvD0_bAz-7TOpcwdIN2zIsqkeX8JRKKBdXSrDTW0Ock9MV8XPrZSCiutxFY1DKsMvfnoviJWnBaolR4XMIs8-lbzxvqg277MbcNLuZm_Odoz5LuvIt65kJgk9odBvZLlWB_VdmS3KC3TWln2fPANxE1cA9MCIT_I10URiUu-OmdjE3V0T_Z5JV4Xlh7s/s320/product2.jpeg' },
    { id: 3, name: 'ADICOLOR SEASONAL', price: 50, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhd7UqEmh4iPmd03uKAt6K3V0-rhiscWt_O6MI3FgEb56rKfAseg6j1LRlT23M0BMawA9YOi9nV70GeVS_vUbw3g3jg8H3qMmeY2PpatOeftZZWHHSP5rs_l12sa_arIwaMzg5hS_W3c-VXWOUHpxufgnMgz46_f_DDgSDhYVxYzJH9JAHPyB0gVpxcY9M/s320/product3.jpeg' },
    { id: 4, name: 'ADICOLOR SEASONAL', price: 50, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibJzUWA_rf3LW8bSzMzVOUw0-VIjF9HYlGPl-xYCh-GNTZ5xseWFTfK4k1retgf1FdFBDb4wtBdh74m4dzKG4sRfbwXYrew6ZeBHtRj44dMgYA9128Ia8O4bhOK9MDj_LF3DGdoxTipz0pamFJFcRYFpXrq_RoCjrWyjyBTYLewolLELx5oOV3udARQAE/s320/product4.jpeg' },
    { id: 5, name: 'ADICOLOR SEASONAL', price: 50, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRIbgChJMjYXhNjEjwwz6zBOHNw5-28wzQ7S-Vnpz-9esL3JeS44FGJcGy9dUkM3eV43cGcXTJGC86gpYGFGIINfUmCA_QgsW1gzyp1sKOBsFR15ZgZBV7MbbYWUI3CSHUc9AGHH2P38NGeCIS0bJ6ZpQEgqo3b2a0UWGcxoHcrkNB-9_MkVkvAzKRTxI/s320/product5.jpeg' },
    { id: 6, name: 'ADICOLOR SEASONAL', price: 50, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhifFLz5IO7zgojh5ElEXSmY26-tsD2lTeMxUDZFLUBLkGmT0YwEMdhpPWPgEs4fffTeGPJ5_gugNLVKmnycOjk-g_jPX45j_PL9LOR33rFW4Y9X5lbu4dtqhKp9WSMeU9_73kIkxCEDOuu9WxXqDK_cuC7xmTL1xLq7GJcbNwhxtnChXuMLL3B86nQNv0/s320/product6.jpeg' },
    { id: 7, name: 'ADICOLOR SEASONAL', price: 50, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhY6iYfA0h-hIxMRnt1Sw0APTIyMYUpG-UpjrKzJLbvgv2TCGgwdKnSWQanayIlCvb7dd4Ln0DvcPvhHVP5zMt_-LpJBJLmGnnQpQ-gR0D7tM0oWfe7A4bKs6DFqgxHRWyP4c2dE57pmv3NdfUAd75NFgtPe89-usxdWBUO2Dn-gn8_bLemRsIboO5JuQM/s320/product7.jpeg' },
    { id: 8, name: 'ADICOLOR SEASONAL', price: 50, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkbZGwnksvXd8Zqpm18nBb8-p5JhoqHRouiDzZ3ixHO70osnIBltpEvL7JwUNj4DIJ1U-Ip4YcM7T7OjTE_ue8G4YMNXQ62CL5u5F9_IpvFGoWtVO-X_msQD05mxGVwHUaw1KDtbdc_-F3a1DqWBFO70cj69YWz3UCba_FscbsfCYcch1jBfirNuuPB2A/s320/product8.jpeg' }
  ];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.showSlide(0);
  }

  showSlide(n: number) {
    this.currentSlide = (n + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.showSlide(this.currentSlide + 1);
  }

  previousSlide() {
    this.showSlide(this.currentSlide - 1);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}

