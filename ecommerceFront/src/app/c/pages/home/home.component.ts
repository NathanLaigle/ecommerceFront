import { Component, HostListener, OnInit } from '@angular/core';
import { Category } from 'src/app/i/category';
import { NFrameService } from 'src/app/s/animation/n-frame.service';
import { CategoryService } from 'src/app/s/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _category: CategoryService,
    private _nframe: NFrameService
  ) {}

  categories: Category[] = this._category.category;

  //test
  numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  ngOnInit(): void {
    this._nframe.doAll();
  }
}
