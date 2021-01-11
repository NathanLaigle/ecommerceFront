import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/i/product';
import { NFrameService } from 'src/app/s/animation/n-frame.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss'],
})
export class ProductThumbnailComponent implements OnInit {
  constructor(private _nframe: NFrameService) {}

  ngOnInit(): void {
    registerLocaleData(localeFr, 'fr');
    this._nframe.validButton();
    this._nframe.send();
    this._nframe.hover();
  }

  @Input() product: Product;
}
