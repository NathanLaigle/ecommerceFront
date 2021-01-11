import { Component, DoCheck, HostListener, OnInit } from '@angular/core';
import { Product } from './i/product';
import { NFrameService } from './s/animation/n-frame.service';
import { ProductsService } from './s/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, DoCheck {
  constructor(
    private _products: ProductsService,
    private _nframe: NFrameService
  ) {}

  public products: Product[];

  public loader: boolean = true;

  innerWidth: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this._nframe.doAll();
    this._products.loadProducts();
    this.products = this._products.products;
  }

  ngDoCheck(): void {
    this.products = this._products.products;
    this.loader = false;
  }
}
