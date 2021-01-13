import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/i/category';
import { NFrameService } from 'src/app/s/animation/n-frame.service';
import { CategoryService } from 'src/app/s/category.service';

@Component({
  selector: 'app-desktop-navbar',
  templateUrl: './desktop-navbar.component.html',
  styleUrls: ['./desktop-navbar.component.scss'],
})
export class DesktopNavbarComponent implements OnInit {
  constructor(
    private _categories: CategoryService,
    private _nframe: NFrameService
  ) {}

  public categories: Category[] = this._categories.category;

  ngOnInit(): void {
    this._nframe.drop();
  }
}
