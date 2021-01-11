import { Component, OnInit } from '@angular/core';
import { NFrameService } from 'src/app/s/animation/n-frame.service';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss'],
})
export class ProductSingleComponent implements OnInit {
  constructor(private _nframe: NFrameService) {}

  ngOnInit(): void {
    this._nframe.validButton();
    this._nframe.send();
  }
}
