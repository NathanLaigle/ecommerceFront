import { Component, OnInit } from '@angular/core';
import { NFrameService } from 'src/app/s/animation/n-frame.service';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss'],
})
export class ProductThumbnailComponent implements OnInit {
  constructor(private _nframe: NFrameService) {}

  ngOnInit(): void {
    this._nframe.validButton();
    this._nframe.send();
    this._nframe.hover();
  }
}
