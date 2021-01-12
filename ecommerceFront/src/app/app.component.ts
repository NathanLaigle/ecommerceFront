import { Component, HostListener, OnInit } from '@angular/core';
import { Product } from './i/product';
import { NFrameService } from './s/animation/n-frame.service';
import { ProductsService } from './s/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private _nframe: NFrameService,
    private _products: ProductsService
  ) {}

  innerWidth: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this._products.loadProducts();
    this.innerWidth = window.innerWidth;
    this._nframe.doAll();
  }
}
